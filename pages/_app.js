import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import Layout from '../components/Layout.jsx'

import withRedux from '../lib/with-redux'

// App中封装了许多App的核心代码
class MyApp extends App {

    state = {
        context: 'value'
    }

    static async getInitialProps(ctx) {
        const { Component } = ctx
        console.log('app初始化')
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        // "MyApp.getInitialProps()" should resolve to an object.
        return {pageProps}
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props

        return (
            <Layout>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Layout>
        )
    }
}

export default withRedux(MyApp)