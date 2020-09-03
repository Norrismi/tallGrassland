import React from 'react';
import {Link} from 'react-router-dom'

import SignedInLinks from '../SignedInLinks/SignedInLinks'
import SignedOutLinks from '../SignOutLinks/SignedOutLinks'
import {connect} from 'react-redux'

const TopNavControl = (props) => {

    console.log(props)

    const {auth} = props

    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>

    return (
        <div>
            {auth.isLoaded && links}
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,

    }
}



export default connect(mapStateToProps)(TopNavControl);
