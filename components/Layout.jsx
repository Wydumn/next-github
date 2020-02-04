import { useState, useCallback } from 'react'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'

import axios from 'axios'

import { Layout, Avatar, Icon, Input, Tooltip, Dropdown, Menu } from 'antd'
import Container from './Container'
import { logout } from '../store/store'
import Link from 'next/link'

const { Header, Content, Footer } = Layout

const { publicRuntimeConfig } = getConfig()

const githubIconStyle = {
    color: 'white',
    fontSize: 40,
    display: 'block',
    paddingTop: 10,
    paddingRight: 20,
}

export const footerStyled = {
    textAlign: 'center'
}

function MyLayout ({ children, user, logout, router }) {
    const urlQuery = router.query && router.query.query
    
    const [search, setSearch] = useState(urlQuery || '')

    const handleSearchChange = useCallback(event => {
        setSearch(event.target.value)
    }, [setSearch])
    
    const handleOnSearch = useCallback(() => {
        Router.push(`/search?query=${search}`)
    }, [search])
    
    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    const userDropDown = (
        <Menu>
            <Menu.Item>
                <a href='javascript:void(0)' onClick={handleLogout}>
                    登出
                </a> 
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout>
            <Header>
                <Container render={<div className="header-inner"/>}>
                    <div className="header-left">
                        <div className='logo'>
                            <Link href='/'>
                                <Icon type="github" style={githubIconStyle} />
                            </Link>
                        </div>
                        <div>
                            <Input.Search
                                placeholder='搜索仓库'
                                value={search}
                                onChange={handleSearchChange}
                                onSearch={handleOnSearch}
                            />
                        </div>
                    </div>
                    <div className='header-right'>
                        <div className="user">
                            {
                                user && user.id ? (
                                    <Dropdown overlay={userDropDown}>
                                        <a href="/">
                                            <Avatar size={40} src={user.avatar_url} />
                                        </a>
                                    </Dropdown>
                                ) : (
                                    <Tooltip title="点击进行登录">
                                        <a href={`/prepare-auth?url=${router.asPath}`}>
                                            <Avatar size={40} icon="user" />
                                        </a>
                                    </Tooltip>
                                )
                            }
                        </div>
                    </div>
                </Container>
            </Header>
            <Content>
                <Container>{children}</Container>
            </Content>
            <Footer style={footerStyled}>
                Develop by wydumn
            </Footer>
            <style jsx>{`
                .header-inner {
                    display: flex;
                    justify-content: space-between;
                }
                .header-left {
                    display: flex;
                    justify-content: flex-start;
                }   
            `}</style>
            <style jsx global>{`
                #__next {
                    height: 100%; 
                }
                .ant-layout {
                    min-height: 100%;
                }
                .ant-layout-header {
                    padding-left: 0;
                    padding-right: 0;
                }
                .ant-layout-content {
                    background: #fff;
                }
            `}</style>
        </Layout>
    )
}

export default connect(function mapStateToProps(state) {
    return {
        user: state.user
    }
}, function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
})(withRouter(MyLayout))
