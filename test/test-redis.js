async function test() {
    const Redis = require('ioredis')

    const redis = new Redis({
        port: 6378,
        password: 'wydumn'
    })

    await redis.set('c', 10, 123)
    const keys = await redis.keys('*')
    console.log(await redis.get('o'))
}

test()