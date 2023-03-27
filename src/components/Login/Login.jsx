import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import '../Style/Layout.css'
import LoginAlternarAcesso from './LoginAlternarAcesso'
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';

function Login() {
    return (
        <div className='login'>

            <div className='login-img-main'>
                <div className='login-img'></div>
            </div>

            <div className="login-card-main">
                <div className="login-main-title">
                    <h2 className='lexorama-title'>lexorama</h2>
                </div>
                <div className="login-card-content">
                    <div className="login-input-main">
                        <div className="login-card-title">
                            <h2 className="login-card-title-content">
                                Login
                            </h2>
                        </div>
                        <div className='login-input-content'>
                            <i className='login-icon-gmail'> <Email /> </i>
                            <input type="text" className='login-input' placeholder='EMAIL' />
                        </div>
                        <div className='login-input-content'>
                            <i className='login-icon-password'> <Lock /> </i>
                            <input type="text" className='login-input' placeholder='PASSWORD' />
                        </div>
                        <div className="login-forgot-password">
                            <p className='forgot-password'>alterar senha</p>
                        </div>

                        <div className="login-input-btn">
                            <Link to='relatorios'>
                                <button className="login-btn-acessar">
                                    Acessar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="login-player-psico">
                    <LoginAlternarAcesso />
                </div>
            </div>
        </div>
    )
}

export default Login