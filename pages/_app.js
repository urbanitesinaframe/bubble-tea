import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import '../styles/globals.css'

/*import von https://www.garymeehan.ie/articles/handling-seo-with-nextjs-and-prismic Start
import App, { Container } from 'next/app'
import React from 'react'
// here we are importing Next's custom component
// for managing the <head>
import Head from 'next/head'
// We will create this object shortly
import { DEFAULT_SEO } from '../config'
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>{
          <><title key="title">{DEFAULT_SEO.title}</title>
              <meta
                key="description"
                name="description"
                content={DEFAULT_SEO.description} />
              <meta
                key="og:url"
                property="og:url"
                content={DEFAULT_SEO.openGraph.url} />
              <meta
                key="og:type"
                property="og:type"
                content={DEFAULT_SEO.openGraph.type} />
              <meta
                key="og:title"
                property="og:title"
                content={DEFAULT_SEO.openGraph.title} />
              <meta
                key="og:description"
                property="og:description"
                content={DEFAULT_SEO.openGraph.description} />
              <meta
                key="og:image"
                property="og:image"
                content={DEFAULT_SEO.openGraph.image} />
              <meta
                key="og:image:width"
                property="og:image:width"
                content={DEFAULT_SEO.openGraph.imageWidth} />
              <meta
                key="og:image:height"
                property="og:image:height"
                content={DEFAULT_SEO.openGraph.imageHeight} />
              <meta
                key="og:locale"
                property="og:locale"
                content={DEFAULT_SEO.openGraph.locale} /></>}
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
import Ende*/

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
