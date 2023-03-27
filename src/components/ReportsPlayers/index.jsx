import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PlayerRegistration from '../PlayerRegistrations'
import './index.css'
import '../Style/Layout.css'

import Header from '../Header'
// import SearchIcon from '@material-ui/icons/Search';
// import VisibilityIcon from '@material-ui/icons/Visibility';


export class Reports extends Component {
  render() {
    return (
      <main>

        <header>
          <Header />
        </header>

        <div className="reports-main container">
          <div className="reports-main-contents">

            <div className="reports-contents-title">
              <h3 className="contents-title">
                Cadastros Pacientes
              </h3>
            </div>

            <PlayerRegistration />

            {/* <div className="register-players">
              <Link to='/'><button className='btn-add-players'>+</button></Link>
            </div> */}

          </div>
        </div>
      </main>
    )
  }
}


export default Reports