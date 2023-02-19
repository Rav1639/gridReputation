import Head from "next/head";
import Link from "next/link";

export default function ThankYou(){
    return(
        <div>
            <Head>
                <title>Thank You</title>
        
        
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '727014112331257');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=727014112331257&ev=PageView&noscript=1"
/></noscript>

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
