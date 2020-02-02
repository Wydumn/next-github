import { useEffect } from 'react'
import { Button, Icon, Tabs } from 'antd'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'
import LRU  from 'lru-cache'

import Repo from '../components/Repo'

const cache = new LRU({
    maxAge: 1000 *10
})

const api = require('../lib/api')

const { publicRuntimeConfig } = getConfig()

let cachedUserRepos, cachedUserStarredRepos

const isServer = typeof window === 'undefined'

function Index ({ userRepos, userStarredRepos, user, router}) {
    // console.log(userRepos, userStarredRepos)

    const tabKey = router.query.key || '1' 

    const handleTabChange = (activeKey) => {
        Router.push(`/?key=${activeKey}`)
    }

    useEffect(() => {
        if (!isServer) {    
            cachedUserRepos = userRepos.data
            cachedUserStarredRepos = userStarredRepos.data
            if (userRepos) {
                cache.set('userRepos', userRepos)
            }
            if (userStarredRepos) {
                cache.set('userStarredRepos', userStarredRepos)
            }
        }
    }, [userRepos, userStarredRepos])

    if (!user || !user.id) {
        return (
            <div className='root'>
                <p>您还没有登录</p>
                <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>
                    点击登录
                </Button>
                <style jsx>{`
                    .root {
                        height: 400px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }    
                `}</style>
            </div>
        )
    }

    return (
        <div className="root">
            <div className="user-info">
                <img src={user.avatar_url} alt="user avatar" className="avatar" />
                <span className="login">{user.login}</span>
                <span className="name">{user.name}</span>
                <span className="bio">{user.bio}</span>
                <p className="email">
                    <Icon type="mail" style={{ marginRight: 10 }} />
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
            </div>
            <div className="user-repos">
                <Tabs activeKey={tabKey} onChange={handleTabChange} animated={false}>
                    <Tabs.TabPane tab="你的仓库" key="1">
                        {userRepos.map(repo => (
                            <Repo key={repo.id} repo={repo} />
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="你关注的仓库" key="2">
                        {userStarredRepos.map(repo => (
                            <Repo key={repo.id} repo={repo} />
                        ))}
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <style jsx>{`
                .root {
                    display: flex;
                    align-items: flex-start;
                    padding: 20px 0;
                }    
                .user-info {
                    width: 200px;
                    margin-right: 40px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                }
                .login {
                    font-weight: 800;
                    font-size: 20px;
                    margin-top: 20px;
                }
                .name {
                    font-size: 16px;
                    color: #777;
                }
                .bio {
                    margin-top: 20px;
                    color: #333;
                }
                .avatar {
                    width: 100%;
                    border-radius: 5px;  
                }
                .user-repos {
                    flex-grow: 1;
                }
            `}</style>
        </div>
    )
}

Index.getInitialProps = async ({ ctx, reduxStore }) => {
    const user = reduxStore.getState().user
    if (!user || !user.id) {
        return {
            isLogin: false
        }
    }

    if (!isServer) {
        if (cache.get('userRepos') && cache.get('userStarredRepos')) {
            return {
                userRepos: cache.get('userRepos'),
                userStarredRepos: cache.get('userStarredRepos'),
            }
        }
    }

    // 获取仓库
    const userRepos = await api.request({
        url: '/user/repos'
    }, ctx.req, ctx.res)

    // 获取认证用户Star的仓库
    const userStarredRepos = await api.request({
        url: '/user/starred'
    }, ctx.req, ctx.res)

    return {
        isLogin: true,
        userRepos: userRepos.data,
        userStarredRepos: userStarredRepos.data
    }
}

export default withRouter(connect(function mapStateToProps(state) {
    return {
        user: state.user,
    }
})(Index))