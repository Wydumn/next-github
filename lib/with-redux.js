import React from 'react'
import createSore from '../store/store'

const isServer = typeof window === 'undefined'
const __NEXT_REUDX_STORE__ = '__NEXT_REUDX_STORE__'

function getOrCreateStore(initialState) {
  if (isServer) {
    return createSore(initialState)
  }

  if (!window[__NEXT_REUDX_STORE__]) {
    window[__NEXT_REUDX_STORE__] = createSore(initialState)
  }
  return window[__NEXT_REUDX_STORE__]
}

export default Comp => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      const { Component, pageProps, ...rest } = this.props

      if (pageProps) {
        pageProps.test = '123'
      }

      return (
        <Comp
          Component={Component}
          pageProps={pageProps}
          {...rest}
          reduxStore={this.reduxStore}
        />
      )
    }
  }

  WithReduxApp.getInitialProps = async ctx => {
    let reduxStore

    if (isServer) {   // 只有在服务端才会处理session
      const { req } = ctx.ctx
      const session = req.session

      if (session && session.userInfo) {
        console.log(session.userInfo)
        reduxStore = getOrCreateStore({ // 传入用户初始数据
          user: session.userInfo,
        })
      } else {
        reduxStore = getOrCreateStore()
      }
    } else {
      reduxStore = getOrCreateStore()
    }

    ctx.reduxStore = reduxStore

    let appProps = {}
    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(ctx)
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    }
  }

  return WithReduxApp
}