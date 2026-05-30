import Head from "next/head";
import Link from "next/link";

export default function ThankYou(){
    return(
        <div>
            <Head>
                <title>Thank You</title>

                <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18180194216"
    ></script>

    <script
        dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'AW-18180194216');

                gtag('event', 'conversion', {
                    'send_to': 'AW-18180194216/ehQMCPb2hLYcEKj__txD'
                });
            `,
        }}
    />
        
        

            </Head>
            <main>
                <div id="thankBack">
                    <div id="thankIn">
                        <div id="ThankText">
                            Thank You for submitting the form, We will get back to you ASAP
                        </div>
                        <div id="thankLink">
                            <Link href='/'>
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
