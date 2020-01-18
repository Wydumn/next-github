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


### 三、Next
#### 1) 路由
Next的Link组件通过给Children添加onClick事件来跳转
Router组件自定义路由（通过Router.push添加location.hash事件监听）

#### 2) 动态路由
- why?   
* 跳转到页面的时候附带一些信息
> next中的路由是通过文件夹的组织映射生成的，不能定义params（文件名中又不会出现':'），动态路由只能通过query(http问号传参)来生成
- how
> 1. Link组件的 href='/a?id=1'
> 2. Router.push({ pathname: '/test/b', query: {id: 2} })
> 3. withRouter获取设置的router参数

```js
import { withRouter } from 'next/router'

const A = ({ router }) => <p>A {router.query.id}</p>

export default withRouter(A)
```

#### 3) 路由映射
1. Link组件的as属性定义路由
- <Link>支持每个组件都支持的onClick事件，若不提供<a>标签，只会处理onClick事件，href不起作用
- <Link href='/a?id=1' as='/a/1' title='AA'>

2.  Router组件

```js
Router.push({
    pathname: '/test/b',
    query: {
        id: 2
    }
}, '/test/b/2')
```

- `问题`：服务端渲染404
> 跳转到/a/1的路由，刷新时出现404，因为刷新触发服务器请求，但是并没有 a文件夹1.js文件
- `解决`：使用koa-router

```js
// 解决URL masking的问题
router.get('/a/:id', async (ctx) => {
    // ctx.params获取url parameters
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
        pathname: '/a',
        query: { id }
    })
    ctx.respond = false
})

server.use(router.routes())
```

#### 4) 路由事件 -- 监听路由事件
##### 浏览器路由
- routeChangeStart(url) 路由开始切换时触发
- routeChangeComplete(url) 完成路由切换时触发
- routeChangeError(err, url) 路由切换报错时触发
- beforeHistoryChange(url) 浏览器history模式开始切换时触发(history API)

##### 哈希路由
- hashChangeStart(url) 开始切换hash值但没有切换页面路由时触发
- hashChangeComplete(url) - 完成切换 hash 值但是没有切换页面路由时触发

```js
const handleRouteChange = url => {
  console.log('App is changing to: ', url)
}

//=>添加监听 Router.events.on
Router.events.on('routeChangeStart', handleRouteChange)
```


#### 5） 数据获取

异步方法getInitialProps获取数据，绑定到props
* getInitialProps将不能使用在子组件中，只能使用在pages页面中
- 页面初次加载时，getInitialProps在服务端执行一次
- 客户端Link跳转（路由切换，即routeChangeStart之后，beforeHistoryChange之前）时，getInitialProps执行一次
- 若在服务端执行过一次，客户端不会再执行，通过hydrate再次复用即可
> Next.js 在做服务器端渲染的时候，页面对应的 React 组件的 getInitialProps 函数被调用，异步结果就是“脱水”数据的重要部分，除了传给页面 React 组件完成渲染，还放在内嵌 script 的 __NEXT_DATA__ 中，这样，在浏览器端渲染的时候，是不会去调用 getInitialProps 的，直接通过 __NEXT_DATA__ 中的“脱水”数据来启动页面 React 组件的渲染。 https://blog.csdn.net/gwdgwd123/article/details/85030708


```js
const A = ({ router, name }) => <Link href='#aa'><a>A {router.query.id} {name}</a></Link>

//=>返回的"对象"将作为A的props
A.getInitialProps = () => {
    return {
        name: 'jocky'
    }
}

// ============================================
// App中封装了许多App的核心代码
class MyApp extends App {
    // App中定义有getInitialProps，自定义组件通过static定义自己的
    // 静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数
    static async getInitialProps({ Component }) {
        console.log('app初始化')
        let pageProps
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps()
        }

        // "MyApp.getInitialProps()" should resolve to an object.
        return {pageProps}
    }


    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

/* 我们可以这样来看待 getInitialProps，它就是 Next.js 对代表页面的 React 组件生命周期的扩充。React 组件的生命周期函数缺乏对异步操作的支持，所以 Next.js 干脆定义出一个新的生命周期函数 getInitialProps，在调用 React 原生的所有生命周期函数之前，Next.js 会调用 getInitialProps 来获取数据，然后把获得数据作为 props 来启动 React 组件的原生生命周期过程。

这个生命周期函数的扩充十分巧妙，因为：

没有侵入 React 原生生命周期函数，以前的 React 组件该怎么写还是怎么写；
getInitialProps 只负责获取数据的过程，开发者不用操心什么时候调用 getInitialProps，依然是 React 哲学的声明式编程方式；
getInitialProps 是 async 函数，可以利用 JavaScript 语言的新特性，用同步的方式实现异步功能。 */
```

### 问题
- getInitialProps
1. 为什么Component要从this.props中解构出来，但是Component的属性却从Component.getInitialProps中获得，而不是也从this.props中解构
   - Component是从App父类继承的，pageProps是通过getInitialProps请求过来自动绑定到props中的
2. 为什么用先通过_app的getInitialProps，再执行页面的getInitialProps呢？
   - 规定


#### 6) document

1. 只有在服务端渲染的时候才会被调用
2. 用来修改服务端渲染的文档内容
3. 一般用来配合第三方css-in-js方案使用

```js
import Document, { Html, Head, Main, NextScript } from 'next/document'

// 自定义MyDocument来覆盖next中的Document
class MyDocument extends Document {
    // 自定义getInitialProps覆盖Document中的方法
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx)

        return {
            ...props
        }
    }
    
    render() {
        // Html、Head、Main这些都是用来覆盖Dcument的模板的
        return <Html>
            <Head>
                <style>{`.test { color: red }`}</style>
            </Head>
            <body className='test'>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument
```

### 问题
1. Next.js的Document和html文件有什么关系？
   - 可以认为Document就是服务端的App.js，经过服务端渲染之后，Next.js中的文件打包为一个html


#### 7) Next的样式定义
1. jsx的使用
```js
const A = ({ router, name }) => (
    <>
        <Link href='#aa'>
            <a className='link'>
                A {router.query.id} {name}
            </a>
        </Link>
        <style jsx>{`a {
            color: red;
        }
        .link {
            color: ${grey};
        }`}</style>
    </>
)
```

2. <style jsx global>该组件内全局样式
3. jsx在服务器端渲染时就已经加载，在浏览器使用时直接显示

#### 8) 集成styled-component
为什么集成styled-component(https://juejin.im/post/5c4aeda46fb9a049de6dbe13)
为了能让服务器渲染样式：
1. 在页面首次加载的时候，能让renderPage方法在服务器端就能对React DOM进行解析，让HTML归HTML，CSS归CSS
2. 能让Document组件在页面切换时，能及时更新<head>,这样不同的页面就能加载自己所需的script，style
styled-component的作用：
* 在服务端渲染的时候，同时渲染出一个ServerStyleSheet（css），然后把这个ServerStyleSheet送入React DOM树中：
1. 把组件styles放到<style>标签
2. 把<style>标签放到<head>中



```js
static async getInitialProps(ctx) {
    // 回调函数renderPage,执行React源码中渲染逻辑同步加载到Next.js的Document组件中形成DOM节点
    const originalRenderPage = ctx.renderPage
    
    ctx.renderPage = () => originalRenderPage({
        //=>接收两个配置项
        //=>App：_app中export的，否则就是Next自带的App
        //=>Component：/pages下的组件，根据路由加载
        enhanceApp: App => 
        enhanceComponent: Component =>
    })
}

{Component: [Function], // 这个Component就是_document中enhanceComponent接收到的参数
    router: 
        Router {    // 整个页面路由相关的配置
            onPopState: [Function],
            route: '/a',
            components: { '/a': [Object], '/_app': [Object] },
            events: 
                {   on: [Function: on],
                    off: [Function: off],
                    emit: [Function: emit] },
            pageLoader: undefined,
            pathname: '/a',
            query: { id: '1' },
            asPath: '/a/1'
            subscriptions: Set {},
            componentLoaderCancel: null,
            _beforePopState: [Function] },
        pageProps: {name: 'firm' }  // _app中getInitialProps得到的数据
    { name: 'firm' }    // 组件a中getInitialProps得到的数据
}
```

- Next中集成styled-components
1. yarn add styled-components babel-plugin-styled-components
2. 到.babelrc中配置

```js
{
    "presets": ["next/babel"],
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd"
            }
        ],
        [
            "styled-components", { "ssr": true}
        ]
    ]
}
```

以下来自[styled-component](https://www.styled-components.com/docs/advanced#server-side-rendering)文档

> - 
>
> styled-components通过stylesheet rehydration（注水？）支持并发服务端渲染。原理是，每次在服务端渲染应用时，创建一个ServerStyleSheet，并为你的React树（组件树？）添加一个provider（React树通过contextAPI接受样式）。
> 这并不干扰全局样式，比如keyframes或createGlobalStyle；同时允许ReactDOM的不同SSR API使用styled-components
>
> - 工具安装
>
> 为了可靠地执行服务器端渲染并且确保客户端bundle打包没有问题，需要使用babel plugin；它通过为每一个styled component添加唯一的ID来避免校验和不匹配问题。
>
> 例子
>
> ```js
> import { renderToString } from 'react-dom/server'
> import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
> 
> const sheet = new ServerStyleSheet()
> try {
>     // const html = renderToString(sheet.collectStyles(<YourApp />))
>     const html = renderToString(
>     	<StyleSheetManager sheet={sheet.instance}>
>         	<YourApp />
>         </StyleSheetManager>
>     )
>     const styleTags = sheet.getStyleTags()    // getStyleElement()                  
> } catch (error) {
>     console.error(error)
> } finally {
>     sheet.seal()
> }
> ```
>
> > 1.  collectStyles() 将元素包在一个provider中，可选的，也可以直接用StyleSheetManager provider直接代替，只要不再服务端使用就可以了
> > 2.  getStyleTags() 返回一个由多个<style>标签组成的字符串，将CSS字符串添加到HTML输出时，要考虑到这一点
> > 3. seal() 要在getStyleTags() / getStyleElement()  调用之后调用
> > 4. getStyleTags() / getStyleElement()  只能在元素渲染后调用，所以 components from sheet.getStyleElement() cannot be combined with <YourApp /> into a larger component. 

#### 9) LazyLoading
- 异步加载模块(module)
> - why?
> 如果moment.js在大多数页面中都用到了，webpack会把它添加到全局依赖；这样，一开始加载首屏页面就会很大，要避免添加到全局
> - 渲染到该模块时再加载
```js
A.getInitialProps = async (ctx) => {
    const moment = await import('moment')   // 这里的import没有对应的export，所以下面要用moment.default
    moment.default
    ...
}
```

- 异步加载组件(Component)
路由切换到该组件，要渲染时再加载
```js
const Comp = dynamic(import('../components/comp'))
```

#### 10) next.js中的配置项
```js
const withCss = require('@zeit/next-css')

const configs = {
    // 编译文件的输出目录,不指定，默认在.next文件夹下
    distDir: 'dest',
    // Next默认给每个页面生成Etag，如果两次请求的Etag相同，第二次请求时Etag相同，就不会请求内容，直接使用缓存
    generateEtags: true,
    // 页面内容缓存配置
    onDemandEntries: {
        // 内容在内存中缓存的时长（ms）
        maxInactiveAge: 25 * 1000,
        // 同时缓存多少个页面
        pagesBufferLength: 2,
    },
    // 在pages目录下什么文件被认为是页面
    pageExtensions: ['jsx', 'js'],
    // 配置buildID
    generateBuildID: async () => {
        if (process.env.YOUR_BUILD_ID) {
            return process.env.YOUR_BUILD_ID
        }

        // 返回null使用默认的unique id
        return null
    },
    // 手动修改webpack config
    webpack(config, options) {
        return config
    },
    // 修改webpackDevMiddleware配置
    webpackDevMiddleware: config => {
        return config
    },
    // 可以在页面上通过 process.env.customKey 获取 value
    env: {
        customKey: 'value',
    },
    // 下面两个要通过'next/config'来获取
    // 只有在服务器端渲染时才会获取的配置
    serverRuntimeConfig: {
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET,
    },
    // 在服务端渲染和客户端渲染都可获取的配置
    publicRuntimeConfig: {
        staticFolder: '/static',
    },
}



if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = withCss({
    env: {
        customKey: 'value',
    },
    serverRuntimeConfig: {
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET,
    },
    publicRuntimeConfig: {
        staticFolder: '/static',
    },
})
```

#### nextjs服务端渲染流程
Next.js作为server的中间件
document    =>  app     =>  实际页面    React的server render渲染出HTML  =>  HTML给到浏览器  =>  浏览器渲染


### 引入redux

#### 1) react-redux
1. _app.js中引入react-redux
```js
import { Provider } from 'react-redux'

import store from '../store/store'

return (
    <Container>
        <Layout>
            <Provider store={store}>
                <MyContext.Provider value={this.state.context}>
                    <Component {...pageProps} />
                    <button onClick={() => this.setState({ context: `${this.state.context}111`})}>update context</button>
                </MyContext.Provider>
            </Provider>
        </Layout>
    </Container>
)
```

2. index.js中连接Index组件与redux
```js
const Index = ({ count, username }) => {
    // ...
    return (
        <>
            <span>Count: {counter}</span>
            <a>UserName: {username}</a>
            <input value={username} onChange={e => rename(e.target.value)} />
            <button onClick={() => add(Counter)}>do add</button>
        </>
    )
}

export default connect(function mapStateToProps(state) {
    return {
        // state就是store.getState()得到的对象
        counter: state.counter.count,
        username: state.user.username,
    }
}, function mapDispatchToProps(dispatch) {
    return {
        add: (num) => dispatch({ type: 'ADD', num }),
        rename: (name) => dispatch({ type: 'UPDATE_USERNAME', name })
    }
})(Index)
```

#### 2) 引入Redux-devtool
```js
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    ...,
    composeWithDevTools(applyMiddleware(ReduxThunk))
)
```

#### 3) Nextjs中的HOC模式
HOC：接收组件作为参数并返回新的组件
1. `/lib`下新建`test-hoc`文件
HOC一般使用方法
```js
export default (Comp) => {
    return function  TestHocComp({ name, ...rest }) {
        // 对于像name这样要处理后再传入的prop，先解构出来
        const name = name + '123'

        return <Comp { ...rest } name={name} />
    }
}
```

- 使用HOC处理自定义App
```js
export default (Comp) => {
    function TestHocComp({ Component, pageProps, ...rest }) {
        // Component时当前活动页面
        // pageProps是预加载页面的props
        if (pageProps) { // 该页面是否有pageProps属性
            pageProps.test = '123'
        }

        return <Comp Component={Component} pageProps={pageProps} {...rest} />
    }

    // getInitialProps是静态方法，没有为什么，它tm就是没给你传过来，老老实实地复制一下
    TestHocComp.getInitialProps = Comp.getInitialPrpos
}
```



#### 4) 集成Redux
- `问题`：进入页面后再刷新 index.js:1 Warning: Text content did not match. Server: "6" Client: "3"

> 服务端渲染将页面打包到`.next`文件夹下，每次读取动态加载    server.js启动服务    =>  动态加载`.next`下webpack打包生成的js文件（也就是把这个js文件当作一个模块）    =>     store也是服务端渲染时的一个Nodejs模块(import / export)，那这个模块就是独一份的，每次服务端渲染不会生成新的store(得到的store就是export default导出去的)   =>    所以再次用到服务端数据时，就得到之前处理过`dispatch(add)`的redux

`解决`：每次调用redux都生成一个新的store(所以把它放在服务端渲染文件的`render()`函数中)

```js
// store.js
export default function initializeStore() {
    const store = createStore(allReducers, {
            user: userInitialState,
            counter: initialState
        },
        composeWithDevTools(applyMiddleware(ReduxThunk))
    )

    return store
}
```

> redux集成到testHoc中使用，将testHoc.js改名为with-redux.js
> _app.js文件下，import testHoc from '../lib/with-redux'

- with-Redux.js中集成Redux
```js
import createStore from '../store/store'

// 是否有window全局变量判断是否处于服务端环境
const isServer = typeof window  === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

// 创建store
function getOrCreateStore(initialState) {
    // 服务端直接创建store
    if (isServer) {
        return createStore(initialState)
    }

    // 客户端，先查看__NEXT_REDUX__是否存在，不存在就将redux存到全局
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = createStore(initialState)
    }

    // 已经存到全局，返回数据
    return window[__NEXT_REDUX_STORE__]
}

TestHocComp.getInitialProps = async (ctx) => {
    // 获取appProps
    let appProps = {}
    if (typeof Comp.getInitialProps === 'function') {
        appProps = await Comp.getInitialProps(ctx)
    }

    // 初始化store 没有服务端渲染要初始化的变量，所以参数默认传入空
    const reduxStore = getOrCreateStore()
}
```

如果有传入要初始化的state，改写`store.js`中的`initializeStore`方法，
```js
// Object.assign(target, source)将所有可枚举属性的值从一个或多个source对象复制到target对象。它将返回target对象。
export default function initializeStore(state) {
    const store = createStore(allReducers, 
        // 将{user, counter}和state融合为一个对象
        Object.assign({},
            {
                user: userInitialState,
                counter: initialState
            }, 
            state
        },
        composeWithDevTools(applyMiddleware(ReduxThunk))
    )

    return store
}
```

因为要将redux的数据集成到withRedux，且1) 返回的是`withRedux`这个高阶组件 2) 要把`reduxStore.getState()`绑定到子组件中   所以要用高阶组件 -- 类式组件
改写`withRedux`
```js
export default (Comp) => {
    return class withRedux extends React.Component {
        constructor(props) {
            super(props);
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }

        render(
            const { Component, pageProps, ...rest } = this.props

            return (
                <Comp pageProps={pageProps} Component={Component} {...rest} reduxStore={this.reduxStore} />
            )
        )
    }

    return withReduxApp
}
```

检验是否会在服务端触发一次`action`，并把改变的数据同步到客户端
```js
 export default (Comp) => {
    return class withRedux extends React.Component {
        ...
    }

    withReduxApp.getInitialProps = async ctx => {
        const reduxStore = getOrCreateStore()

        ctx.reduxStore = reduxStore

        let appProps = {}
        if (typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps(ctx)
        }

        return {
            ...appProps,
            initialReduxState: reduxStore.getState(),
        }
    }

    return withReduxApp
}
```

withRedux的getInitialProps来自_app.js   
包裹了app.js，返回一个高阶组件withReduxApp,`getInitialProps`在服务端渲染和客户端切换页面渲染时执行，所以用它来初始化store很合适，并且这是一个方法，每次执行完毕，里面的变量都会销毁，所以每次执行都生成新的store

`getInitialProps`在服务端渲染时，返回的对象序列化为字符串写在html中，返回到客户端，客户端读取`<script id='__NEXT_DATA_'>`中的字符串，将其转换为JS对象（反序列化），在客户端生成一个store
```js
<script id="__NEXT_DATA__" type="application/json">
        {
            "dataManager": "[]",
            "props": {
                "pageProps": {},
                "initialReduxState": {
                    "counter": {
                        "count": 3
                    },
                    "user": {
                        "username": "firm"
                    }
                }
            },
            "page": "/",
            "query": {},
            "buildId": "development",
            "runtimeConfig": {
                "staticFolder": "/static"
            }
        }
    </script>
```
with-redux中就不能再返回一个reduxStore（reduxStore是一个对象，里面有很多方法，不方便序列化为字符串），而是用reduxStore.getState()代替

得到state后，在客户端渲染组件时，调用`withReduxApp`的`constructor`方法，这就生成了`store`对象，服务端也同样，然后就可以在`render`函数中将其传给子组件，然后在`_app.js`中的通过`props`接收`reduxStore`

综上，在`withReduxApp`中重写`getInitialProps`是为了初始化`reduxStore`

----------------------------------
为什么创建一个`getOrCreateStore()` ？客户端切换路由时，会调用`_app.getInitialProps`，所有的页面是共用一个reduxStore，不可能每次切换路由时都创建一个新的reduxStore，所以reduxStore要保存在全局，让每个Component都可以访问到  ` window[__NEXT_REDUX_STORE__] = createStore(initialState)`


**所以下面的问题？？**
1. 服务端如何写入数据到store
2. 如何同步服务端的数据到客户端



```
为什么说Next.js是React的框架，因为React的Component外面还套了一个页面--- app.js，所有的Component获取数据都要通过app.js，而不是反复的触发AJAX请求
```

### OAuth
#### 1)时序图
Resource Owner：资源所有者，即用户
User Agent：用户代理，即浏览器
Authorization server：认证服务器，即服务提供商专门用来处理认证的服务器(GitHub OAuth)
Resource server：资源服务器，服务提供商存放用户生成的资源的服务器，与认证服务器可以是同一个

浏览器点击认证  =>  跳转认证    =>  GitHub页面完成认证  =>  redirect with code   =>  

#### 2)GitHub OAuth注册认证
Developer setting   =>  Register a new OAuth application
Homepage URL：要认证的页面
Authorization callback URL:认证后跳转到的页面
保存得到的ClientID和client secret
新建config.js

```js
module.exports = {
    github: {
        client_id: '1d9a8ce8f258d7f6f296',
        client_secret: '91ad7f06d5e82b71f2ad9574363a9a83eaaaef8a'
    }
}
```

GitHub页面上，Revoke all user tokens可以取消所有已认证
Reset client secret重置client secret

#### 2) OAuth字段详解及流程演示
字段
client_id   
scope：repo、user等
redirect_uri：要与Authorization callback URL一致
login：是否允许用户登录，默认为true，即初次登录，要输入账号密码，false就保存账号和密码了
state：
allow_signup：是否允许注册

1. 通过以下链接及参数进行认证，请求code
GET方法 https://github.com/login/oauth/authorize?client_id=1d9a8ce8f258d7f6f296
> Redirect with code    http://localhost:3000/auth?code=78102db3168450b59e09

2. 在Restlet Client模拟HTTP请求access_token
https://github.com/login/oauth/access_token
POST方法  https://github.com/login/oauth/access_token
请求体
{
  "client_id":"1d9a8ce8f258d7f6f296",
  "client_secret":"91ad7f06d5e82b71f2ad9574363a9a83eaaaef8a",
  "code":"78102db3168450b59e09"
}

响应体中得到 access_token=17910765caef81a36450f2bea77abe5b2de50f68&scope=repo%3Astatus%2Cuser&token_type=bearer
保存结果后，再次请求
```
error=bad_verification_code&error_description=The+code+passed+is+incorrect+or+expired.&error_uri=https%3A%2F%2Fdeveloper.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-oauth-app-access-token-request-errors%2F%23bad-verification-code
```

所以code失效了，GET方法请求新的code，用这个code POST请求新的access_token    得到4b5d1033ad691dbfad4ac2b12915751e1bccd4f3

3. 请求用户信息
```
请求头Authorization: token OAUTH-TOKEN
GET https://api.github.com/user
```
响应体中得到所有用户信息                                                               
#### 4)OAuth Code安全保证
- 策略
    1. 一次性code，如上节所示
    2. id + secret      code_id和code_secret保存在服务器上，不公开
    3. redirect_url     请求时redirect_url的请求参数如果和Auth callback url不一样报错

#### 5) cookie和session
`server.js`中设置
```js
server.use(async (ctx, next) => {
    ctx.cookies.set('id', 'userid:12345')
    await handle(ctx.req, ctx.res)   // 获得nodejs的req和res对象，不是Koa的res/ req对象
    ctx.respond = false
})
```

Dev Tools中查看localhost响应头
```
Set-Cookie: id=userid:12345; path=/; httponly
```

获取cookies
```js
server.use(async (ctx, next) => {
    console.log(ctx.cookies.get('id'))
    await next()    // 不是最后一个中间件，next
})
```
获取到数据
```js
await handle(ctx.req, ctx.res)
```

cookies是存储在客户端的凭证，浏览器每次发请求都会带上凭证，根据凭证进行内容返回
```js
// pages下的页面编译完成后，启动服务
app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    server.keys = ['firm jia mi']     // 签名的 cookie 密钥数组   
    const SESSION_CONFIG = {
        key: 'jid', // 设置cookie的key
        // store: {}   存取session到数据库
    }  

    //=>使用koa-session
    server.use(session(SESSION_CONFIG, server))

    // server.use(async ctx => {
    //     if (ctx.cookies.get('jid')) {
    //         ctx.session = {}
    //     }
    //     await next()
    //     // ctx.session
    //     // ctx.cookies.set()
    // })

    server.use(async (ctx, next) => {
        console.log('session is:', ctx.session)

        await next()
    })

    router.get('/a/:id', async (ctx) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: { id }
        })
        ctx.respond = false     // 为了绕过 Koa 的内置 response 处理，你可以显式设置 ctx.respond = false;
    })

    router.get('/set/user', async ctx => {
        ctx.respond = false
        ctx.session.user = {
            username: 'firm',
            age: 1000
        }
        ctx.body = 'set session success'
    })

    server.use(router.routes())

    server.use(async (ctx, next) => {
        ctx.cookies.set('id', 'userid:12345')
        ctx.req.session = ctx.session
        await handle(ctx.req, ctx.res)   // 获得nodejs的req和res对象，不是Koa的res/ req对象
        ctx.respond = false

    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.listen(3000, () => {
        console.log('koa server listening on 3000!')
    })

    // ctx.body
})
```

#### 6) 创建koa-session的Redis存储store
1. 创建session-store文件
```js
function getRedisSessionId(sid) {
    return `ssid:${sid}`
}

class RedisSessionStore {
    constructor(client) {
        this.client = client
    }

    // 获取Redis中存储的session数据
    async get(sid) {...}

    // 存储session数据到redis
    async set(sid, sess, ttl) {...}
    
    // 从redis中删除某个session
    async destroy(sid) {...}
}

module.exports = RedisSessionStore
```


```js
// 引入redis
const Redis = require('ioredis')

// 引入session-store
const RedisSessionStore = require('./server/session-store')

// 创建redis client
const redis = new Redis()   

// pages下的页面编译完成后，启动服务
app.prepare().then(() => {
    ...

    server.keys = ['firm jia mi']     // 签名的 cookie 密钥数组   
    const SESSION_CONFIG = {
        key: 'jid', // 设置cookie的key
        // maxAge: 10 * 1000,  // 设置最大保存时间 10s
        store: new RedisSessionStore(redis)   // 存取session到数据库
    }  

    ...

    server.use(async (ctx, next) => {
        console.log('session is:', ctx.session)

        await next()
    })

    ...

    // 创建用户信息
    router.get('/set/user', async ctx => {
        // ctx.respond = false
        ctx.session.user = {
            username: 'firm',
            age: 1000
        }
        ctx.body = 'set session success'
    })

    // 删除用户信息
    router.get('/delete/user', async ctx => {
        ctx.session = null;
        ctx.body = 'delete session success'
    })

    ...
})
```


#### 7) 接入GitHub-OAuth
1. 在`Index`加入按钮，点击跳转进行OAuth验证
```js
const Index = ({counter, username, rename, add}) => {
    ...
    return (
        <>
            ...
            <a href="" />
        </>
    )
}
```


2. 引入client_id
next.config.js
```js
const config = require('./config')
```

3. 拼接验证链接
```js
...
const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const SCOPE = 'user'
...
module.exports = withCss({
    publicRuntimeConfig: {
        GITHUB_OAUTH_URL,
        OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${config.github.client_id}$scope=${SCOPE}`
    },
})
```

4. 解决404问题 -- 新建auth.js
```js
```



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

