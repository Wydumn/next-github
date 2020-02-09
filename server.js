const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const auth = require('./server/auth')
const api = require('./server/api')
const koaBody = require('koa-body')
const atob = require('atob')

const RedisSessionStore = require('./server/session-store')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// 类似express中的createApplication...
const handle = app.getRequestHandler()

const redis = new Redis()   

// 设置nodejs全局增加一个atob方法
global.atob = atob

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    server.keys = ['wydumn secret']     // 签名的 cookie 密钥数组   
    
    server.use(koaBody())
    
    const SESSION_CONFIG = {
        key: 'jid', // 设置cookie的key
        store: new RedisSessionStore(redis)
    }  

    //=>使用koa-session
    server.use(session(SESSION_CONFIG, server))

    auth(server)
    api(server)

    router.get('/a/:id', async (ctx) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: { id }
        })
        ctx.respond = false
    })

    router.get('/api/user/info', async (ctx) => {
        const user = ctx.session.userInfo
        if (!user) {
            ctx.status = 401
            ctx.body = 'Need Login'
        } else {
            ctx.body = user
            ctx.set('Content-Type', 'application/json')
        }
    })

    server.use(router.routes())

    server.use(async (ctx, next) => {
        ctx.cookies.set('id', 'userid:12345')
        ctx.req.session = ctx.session
        await handle(ctx.req, ctx.res)   // 获得nodejs的req和res对象，不是Koa的res/ req对象
        ctx.respond = false
        await next()
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.listen(3000, () => {
        console.log('koa server listening on 3000!')
    })
})