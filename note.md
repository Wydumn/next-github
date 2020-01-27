### 一、next做的事情

1. nextjs自身带有服务器，值处理ssr渲染
2. 处理HTTP请求，并根据请求数据返回相应的内容
3. 根据域名之类的HOST来定位服务器

next.js无法处理服务端
1. 数据接口
2. session状态
3. 数据库连接

Why Koa?
1. koa是一个轻量级框架
2. 项目相对轻量，并不需要非常复合JS特性
3. 易于扩展，编程模式复合JS特性blog

Error: read ECONNRESET
      at TCP.onStreamRead (internal/stream_base_commons.js:111:27)
https://zhuanlan.zhihu.com/p/86953757

ctx.request     Koa Request对象
ctx.response    Koa Response对象
ctx.req         Nodejs request对象
ctx.res         Nodejs response对象


```js
// import React, { Children } from 'react'; next中不需要引入

export default () => <span>aaa</span>

// React.createElement('span', {}, Children)
```

```js
Koa的使用
const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

// 初始化next，建一个app，'dev'判断是否在dev状态(不在production状态)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// ???
const handle = app.getRequestHandler()

// pages下的页面编译完成后，启动服务
// app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/test/:id', (ctx) => {
        // ctx.body = `<p>request /test ${ctx.params.id}</p>`
        ctx.body = { success: true }
        ctx.set('Content-Type', 'application/json')
    })

    server.use(async (ctx, next) => {
        // 等待下一个中间件，否则，下一个中间件将不工作 
        await next()
    })

    server.use(router.routes())

    // server.use(async (ctx, next) => {
    //     ctx.body = '<span>Koa Render-2<span>'
    // })

    // server.use(async (ctx, next) => {
    //     await handle(ctx.req, ctx.res)   // 获得nodejs的req和res对象，不是Koa的res/ req对象
    //     ctx.respond = false
    // })

    server.listen(3000, () => {
        console.log('koa server listening on 3000!')
    })
// })
```

### 二、 目录结构
- 以 ./pages作为服务端的渲染和索引
- 静态文件服务. ./static/ 映射到 /static/
- next.config.js next项目配置文件
- pages
    + _app.js
    + _document.js

- babelrc 
    babel-plugin-import 按需加载    
    例如 antd中的button组件，import { Button } from 'antd'会把整个antd加载；按需加载相当于 import Button from 'antd/dist/lib/button'


### 项目整体设计
#### 1) 项目整体布局
1. AntD自带组件不能再改样式，在组件嵌套的最外层再包一个div改变该AntD组件的样式
2. AntD组件的style属性，自定义样式
3. 不变的样式，比如全局，再最外层const定义一个对象，传入style属性

#### 2) 组件开发技巧
`问题`：使用`<Container>`会新建一层`div`，也就加了一层DOM节点子树
希望有标签，写在内部，又有`Container`的特性
`方案`：`React.cloneElement`

`Container.jsx文件下`
```js
export default ({ children, renderer = <div /> }) => {
    const newElement = cloneElement(renderer, {
        style: Object.assign({}, renderer.props.style, style),
        children,
    })

    return newElement
}
```

`Layout.jsx`文件下使用
```js
<Container renderer={<div className="header-inner"/>}>
    {children}
</Container>
```

#### 3) 服务端渲染同步用户信息

```js
export default Comp => {
  WithReduxApp.getInitialProps = async ctx => {
    let reduxStore

    if (isServer) {   // 只有在服务端才会处理session
      const { req } = ctx.ctx
      const session = req.session

      if (session && session.userInfo) {
        reduxStore = getOrCreateStore({ // 初始化用户信息
          user: session.userInfo,
        })
      } else {
        reduxStore = getOrCreateStore()
      }
    } else {
      reduxStore = getOrCreateStore()
    }

    ctx.reduxStore = reduxStore

    ...
}
```

#### 4) 完善登录功能
将用户信息传入MyLayout，也就是整个页面
```js
export default connect(function mapState(state) {
    return {
        user: state.user
    }
})(MyLayout)
```

是否有用户信息来决定头像显示
```js
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
                <a href={publicRuntimeConfig.OAUTH_URL}>
                    <Avatar size={40} icon="user" />
                </a>
            </Tooltip>
        )
    }
</div>
```

#### 5) 用户登出功能实现

- void 操作符用法格式如下： 
`javascript:void (expression) `
```js
// 当用户链接时，void(0) 计算为 0，但 Javascript 上没有任何效果。
<A HREF="javascript:void(0)">单此处什么也不会发生</A>
<A HREF="javascript:void(document.form.submit())">单此处提交表单</A>
```

```js
// 登出与任何state和props无关,所以处理handleLogout的依赖项为空
const handleLogout = useCallback(() => {
    logout()
}, [logout])

// DropDown中overlay属性规定Menu类型
const userDropDown = (
    <Menu>
        <Menu.Item>
            <a href="javascript:void(0)" onClick={handleLogout}>
                登出
            </a>
        </Menu.Item>
    </Menu>
)

export default connect(function mapStateToProps(state) {
    return {
        user: state.user
    }
}, function mapDispatchToProps(dispatch) { // 连接dispatch到组件
    return {
        logout: () => dispatch(logout())
    }
})(MyLayout)
```

服务端 `auth.js`文件下处理登出
```js
server.use(async (ctx, next) => {
    const path = ctx.path
    const method = ctx.method
    if (path === '/logout' && method ==='POST') {
        ctx.session = null
        ctx.body = `logout success`
    } else {
        await next()
    }
})
```

`store.js`处理
```js
// reducer中处理
switch(action.type) {
    case LOGOUT:
        return {}
    default:
        return state
}

export function logout() {
    return dispatch => {
        axios.post('/logout').then(
            resp => {
                if (resp.status === 200) {
                    dispatch({
                        type: LOGOUT
                    })
                } else {
                    console.log('logout failed', resp)
                }
        }).catch(err => {
            console.log('logout failed', err)
        })
    }
}
```

#### 6) 实现认证后跳转回原来页面

服务端
```js
module.exports = server => {
    server.use(async (ctx, next) => {
        if (ctx.path === '/auth') {
                ...

                // 认证后返回认证前的页面
                ctx.redirect((ctx.session && ctx.session.urlBeforeOAuth) || '/')
                ctx.session.urlBeforeOAuth = ''
                ...

    server.use(async (ctx, next) => {
        if (ctx.path === '/prepare-auth' && ctx.method ==='GET') {
            const { url } = ctx.query
            ctx.session.urlBeforeOAuth = url    // 保存认证前的url到session
            ctx.redirect(config.OAUTH_URL)
        } else {
            await next()
        }
    })
}
```

客户端
```js
function MyLayout ({ children, user, logout, router }) {
    ...
    
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
}

export default connect(...)(withRouter(MyLayout))   // 将router的信息传入MyLayout的props
```

#### 7) 页面切换的加载效果

加载效果
```js
import { Spin } from 'antd'

export default () => (
    <div className="root">
        <Spin />
        <style jsx>{`
            .root {
                position: fixed;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: rgba(255, 255, 255, 0.3);
                z-index: 10001;
                display: flex;
                align-items: center;
                justify-content: center;
            }    
        `}</style>

    </div>
)
```

通过监听`Router.events`路由切换事件来启动加载效果，切换完成关闭`<Spin/>`
```js
// _app.js
class MyApp extends App {
    state = {
        loading: false
    }

    startLoading = () => {
        this.setState({
            loading: true
        })
    }

    stopLoading = () => {
        this.setState({
            loading: false
        })
    }

    componentDidMount() {
        Router.events.on('routerChangeStart', this.startLoading)
        Router.events.on('routerChangeComplete', this.stopLoading)
        Router.events.on('routerChangeError', this.stopLoading)
    }

    componentWillUnmount() {
        Router.events.off('routerChangeStart', this.startLoading)
        Router.events.off('routerChangeComplete', this.stopLoading)
        Router.events.off('routerChangeError', this.stopLoading)
    }

    static async getInitialProps(ctx) {
        ...
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props

        return (
            <Provider store={reduxStore}>
                { this.state.loading ? <PageLoading /> : null }
                <Layout>
                    <Link href="/">
                        <a>Index</a>
                    </Link>
                    <Link href="/detail">
                        <a>Detail</a>
                    </Link>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}
```


#### 8) Github接口代理
代理https://api.github.com/search/repositories?q={query}
认证后一小时可请求5000次(半秒一次？)，未认证一小时60次(一分钟一次？)

session中的内容
```js
{
  githubAuth: {
    access_token: '9830ae9e02a5ac3472132f070946fc3ee4d9e023',
    token_type: 'bearer',
    scope: 'user'
  },
  userInfo: {
    login: 'Wydumn',
    id: 29623732,
    node_id: 'MDQ6VXNlcjI5NjIzNzMy',
    avatar_url: 'https://avatars0.githubusercontent.com/u/29623732?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Wydumn',
    html_url: 'https://github.com/Wydumn',
    followers_url: 'https://api.github.com/users/Wydumn/followers',
    following_url: 'https://api.github.com/users/Wydumn/following{/other_user}',
    gists_url: 'https://api.github.com/users/Wydumn/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Wydumn/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Wydumn/subscriptions',
    organizations_url: 'https://api.github.com/users/Wydumn/orgs',
    repos_url: 'https://api.github.com/users/Wydumn/repos',
    events_url: 'https://api.github.com/users/Wydumn/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Wydumn/received_events',
    type: 'User',
    site_admin: false,
    name: null,
    company: null,
    blog: '',
    location: 'Shanghai',
    email: null,
    hireable: null,
    bio: null,
    public_repos: 6,
    public_gists: 0,
    followers: 0,
    following: 1,
    created_at: '2017-06-22T08:05:02Z',
    updated_at: '2020-01-19T03:10:08Z',
    private_gists: 0,
    total_private_repos: 0,
    owned_private_repos: 0,
    disk_usage: 1322,
    collaborators: 0,
    two_factor_authentication: false,
    plan: {
      name: 'free',
      space: 976562499,
      collaborators: 0,
      private_repos: 10000
    }
  },
  urlBeforeOAuth: '',
  _expire: 1579568212197,
  _maxAge: 86400000
}
```

server下新建`api.js`
```js
const axios = require('axios')

const github_base_url = 'https://api.github.com'

module.exports = server => {
    server.use(async (ctx, next) => {
        const path = ctx.path
        if (path.startsWith('/github/')) {  // string方法
            // ctx.session.githubAuth  '/auth'请求后得到的result.data
            const githubAuth = ctx.session.githubAuth
            // https://api.github.com/search/repositories?q={query}
            const githubPath = `${github_base_url}${ctx.url.replace('/github/', '/')}`

            const token = githubAuth && githubAuth.access_token
            let headers = {}
            if (token) {
                headers['Authorization'] = `${githubAuth.token_type} ${token}`
            }

            try {
                const result = await axios({
                    method: 'GET',
                    url: githubPath
                })

                if (result.status === 200) {
                    ctx.body = result.data
                    ctx.set('Content-Type', 'application/json')
                } else {
                    ctx.status = result.status
                    ctx.body = {
                        success: false,
                    }
                    ctx.set('Content-Type', 'application/json')
                }
            } catch (err) {
                console.error(err)
                ctx.body = {
                    success: false
                }
            }
        } else {
            await next()
        }
    })
}
```


#### 9) Github接口代理完善

```js
import axios from "axios"

function Index () {
    return <span>Index</span>
}

Index.getInitialProps = async () => {
    const result = await axios
        .get('/github/search/repositories?q=react')
        .then(res => console.log(res))

    return {
        data: result.data
    }
}

export default Index
```
运行
Error: connect ECONNREFUSED 127.0.0.1:80
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1129:14)

`原因`：
`Index`在服务端运行的时候，对于`axios`请求的链接，自动加上IP地址`127.0.0.1`（localhost的IP地址），即
`http://127.0.0.1/github/search/repositories?q=react`端口号默认为80，但是服务开在`3000`端口。
而在客户端，也就是浏览器端的时候，有`localhost:3000`，所以不会错
`解决`：写一遍服务端处理`api.github.com`的逻辑

进入页面，xhr请求中没有关于`api.github.com`的请求，但是数据已经获取到，说明数据是在服务端渲染时已经获取到了，在客户端是同构了，数据一致。

1. `XXX.getInitialProps`在‘客户端’切换至`XXX`页面时会渲染执行，在**服务端访问**该页面时也会渲染执行
2. XXX页面在服务端访问时，运行在NodeJs环境；所以`axios.get('/github/search/repositories?q=react')`不会像浏览器那样处理，而是**处理为`http://localhost/github/search/repositories?q=react`**(没有window环境中的domain)，端口默认时80
3. 两边处理的方式不同，所以处理api请求时，要**区分服务端还是客户端**
`lib/api.js`
```js
const axios = require('axios')

const github_base_url = 'https://api.github.com'

// 提取 向API发送请求的方法
async function requestGithub(method, url, data, headers) {
    return await axios({
        method,
        url: `${github_base_url}${url}`,
        data,
        headers
    })
}


const isServer = typeof window === 'undefined'
async function request({ method = 'GET', url, data = {} }, req, res) {
    if (!url) { // url必须要存在
        throw Error('url must provide')
    }
    if (isServer) { // 服务端渲染时，可以直接拿到request的参数，直接执行requestGithub
        const session = req.session
        const githubAuth = session.githubAuth || {}
        const headers = {}
        if (githubAuth.access_token) {
            headers['Authorization'] = `${githubAuth.token_type} ${githubAuth.access_token}`
        }
        return await requestGithub(method, url, data, headers)
    } else {    // 客户端就直接发送AJAX请求
        return await axios({
            method,
            url: `/github${url}`,
            data
        })
    }
}

module.exports = {
    request,
    requestGithub
}
```

客户端的ajax请求就会到koa中的`server/api.js`中被拦截进行处理，还是调用`requestGithub`进行处理（？？？为什么）（这tm的就叫tm的同构，一套方案，两个端都会使用）
```js
module.exports = server => {
    server.use(async (ctx, next) => {
        const path = ctx.path
        const method = ctx.method
        if (path.startsWith('/github/')) {
            const session = ctx.session
            const githubAuth = session && session.githubAuth
            const headers = {}
            if (githubAuth && githubAuth.access_token) {
                headers['Authorization'] = `${githubAuth.token_type} ${githubAuth.access_token}`
            }
            // requestGithub处理
            const result = await requestGithub(method, ctx.url.replace('/github/', '/'), {}, headers)

            ctx.status = result.status
            ctx.body = result.data
        } else {
            await next()
        }
    })
}
```

4. 引入`koa-body`来处理POST请求
```js
const koaBody = require('koa-body')
server.use(koaBody())
// 之后就可以在ctx.request.body中处理POST请求
```


