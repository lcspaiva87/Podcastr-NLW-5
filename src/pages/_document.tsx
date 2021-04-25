import Documenet, { Html, Head, Main, NextScript } from 'next/document'
import SEO from '../components/Seo';

export default class MyDocument extends Documenet {
    render() {
        return (
            <Html>
                <Head>
                    <SEO title="Home" description={'Olá eu sou a description'} />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}