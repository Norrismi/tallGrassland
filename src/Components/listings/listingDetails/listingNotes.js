import React from 'react';
import './listingDetails.css'

const listingNotes = () => {
    return (
        <div className='notes_container text-muted'>
            <h5 className='notes_container-title'>Notes</h5>
            <p >We have been to this property but have not explored it in its entirety. Everything we know about the property is described above. Buyer is responsible for performing their own due diligence in researching the property for sale. All buyers are required to verify all information, contained herein or not, for themselves and satisfy themselves as to its accuracy. Information is deemed reliable but not guaranteed. Parcel is sold AS IS.</p>
            <div id='notes_important-title'><mark>How It Works</mark></div>
            <p >Payment by wire transfer, credit/debit card, cashier’s check or money order are accepted. To save time with your Deed Processing, please email the following information to TallGrassland@gmail.com: </p>
            <ul className='text-muted'>
                <li>Name(s) to be recorded on Deed</li>
                <li>If married, do you wish to file jointly?</li>
                <li>Mailing Address for you to receive the Deed</li>
                <li>E-mail address to send a photocopy of your Deed</li>
            </ul>
            <p>Once the payment has been received and cleared, we will send out the Deed (Quit Claim Deed) to the county to be recorded. You will received a scan of the notarized deed at this time via email</p>
            <p>After the county records the deed, they will send you the Deed via mail. You may also call or check their website once the transfer has been completed. Congratulations, you will now be the official owner of this property!</p>
            <div id='notes_important-title'><mark>Terms and Conditions</mark></div>
            <p>Buyers are responsible for completing all due diligence PRIOR to purchase</p>
            <p> Transfer process takes up to 3-4 weeks for completion</p>

        </div>
    );
}

export default listingNotes;
