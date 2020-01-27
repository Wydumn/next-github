import App from 'next/app'
import { Provider } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link'
import 'antd/dist/antd.css'

import axios from 'axios'

import Layout from '../components/Layout'

import withRedux from '../lib/with-redux'
import PageLoading from '../components/PageLoading'

// App中封装了许多App的核心代码
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
        const { Component } = ctx
        console.log('app初始化')
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
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

export default withRedux(MyApp)