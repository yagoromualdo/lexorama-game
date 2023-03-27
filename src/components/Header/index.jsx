import React from 'react'
import './index.css'
import '../Style/Layout.css'
import AccountCircle from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <header className='header'>
            <div className="header-main">
                <div className="header-container">
                    <div className="header-title-main">
                        <h2 className='header-title'>LEXORAMA</h2>
                    </div>

                    <div className="header-content-user">
                    <div className="header-login-user">
                        <p className='login-user-name'>Everton Fernandes</p>
                        <p className='login-user-professional'>Psicopedagogo</p>
                    </div>
                    <div className='login-profile-user'>
                        <i> <AccountCircle fontSize='large' className='login-icon-user' /> </i>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header