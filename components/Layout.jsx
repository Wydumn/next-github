import { useState, useCallback } from 'react'

import { Layout, Avatar, Icon, Input } from 'antd'

const { Header, Content, Footer } = Layout

import Container from './Container'

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

export default ({ children }) => {
    const [search, setSearch] = useState('')

    const handleSearchChange = useCallback(event => {
        setSearch(event.target.value)
    }, [setSearch])
    
    const handleOnSearch = useCallback(() => {}, [])
    
    return (
        <Layout>
            <Header>
                <Container render={<div className="header-inner"/>}>
                <div className="header-left">
                    <div className='logo'>
                        <Icon type="github" style={githubIconStyle} />
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
                        <Avatar size={40} icon="user" />
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
                    height: 100%;
                }
                .ant-layout-header {
                    padding-left: 0;
                    padding-right: 0;
                }
            `}</style>
        </Layout>
    )
}
