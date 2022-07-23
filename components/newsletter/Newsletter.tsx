import { Button } from "@components/ui"
import Script from "next/script"


const Newsletter = () => {

    return (
        <>
            <h3 className="heading-text text-center">You a cool cat?</h3>
            <p className="heading-tag text-center">Want dank memes & weed discounts in your inbox? Enter your email meow!</p>
            <form id="email_signup" className="lg:w-1/2 flex flex-col items-center" action="https://manage.kmail-lists.com/subscriptions/subscribe" data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe" method="GET" target="_blank" noValidate>
                <input type="hidden" name="g" value="XyX6vU" />
                <input type="hidden" name="$fields" value="$consent" />
                <input type="hidden" name="$list_fields" value="$consent" />
                <div className="klaviyo_field_group w-full">
                    <input className="mb-3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 font-mono" type="email" name="email" id="k_id_email" placeholder="Your email" />
                    <div className="klaviyo_form_actions text-center">
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
            </form>
            <Script src="https://www.klaviyo.com/media/js/public/klaviyo_subscribe.js" strategy='beforeInteractive'></Script>
            <Script src="k.js"></Script>
        </>
    )
}

export default Newsletter