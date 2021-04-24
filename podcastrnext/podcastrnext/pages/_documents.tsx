import Document,{Html,Head,Main,NextScript } from 'next/document';

export default class MyDocument extends Document {
    //Nao pode fazer em formato de funcao no nextjs
    render() {
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lexend:wght@400;500&display=swap" rel="stylesheet"></link>
                </Head>
            <body>
                <Main/>
                    <NextScript>

                    </NextScript>
            </body>
        </Html>
        );

    }
}

