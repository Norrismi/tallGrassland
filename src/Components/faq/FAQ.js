
import React from 'react';
import './faq.css'

const FAQ = () => {
    return (
        <div className='faq'>


            <h3 className='faq__title'>FAQ</h3>
            <span className='faq__title-description text-muted'>Frequently Asked Questions</span>


            <div className='faq__row'>

                <div className='faq__left'>

                    <h4>How does purchasing a property from your site work?</h4>
                    <div>Easy as 1,2,3! By clicking on the buy button you will be directed to our secure payment provider for check out. After you check out I will get started processing a new deed in your name. I will send the deed to the county office for deed recording. Once the deed is recorded, the county will mail the deed to your residence. </div>
                    <h4>Are you a real estate agent?</h4>
                    <div>No, I am not a real estate agent. These are all properties that I have an equitable interest in (ownership or a partnership). All of these properties are for sale by owner.</div>
                    <h4>Can you help me look for a specific kind of property?</h4>
                    <div>I am not a real estate agent and don’t specifically work for the end buyer in that capacity. Although, if you provide your information in one of the contact forms, I will take your submission in consideration. If I do come across property in the specific region I will let you know.</div>
                </div>

                <div className='faq__right'>

                    <h4>Are their any hidden fees when buying land from you?</h4>
                    <div>There are no hidden fees. All fees are stated in the property advertising on this site. </div>

                    <h4>Why are your properties so cheap?</h4>
                    <div>You will find our properties are discounted around 50% to 80% due to our proprietary marketing systems that help land owners sell their property. Often times owners want to sell, because they need money. This is where I step in and help buy their property fast and for cash.  This situation is a win for all parties involved and we pass the discount on to you!</div>

                    <h4>How are these properties different from properties posted on the MLS?</h4>
                    <div>Most of the properties that you find here are never posted on the MLS. I am driven to provide results quickly, as apposed to letting properties sit on the MLS “Multiple Listing Services” for a longer than needed timeframe. Tall Grassland wants to help people reach their goals quickly! </div>
                </div>
            </div>


        </div>
    );
}

export default FAQ;
