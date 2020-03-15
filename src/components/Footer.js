import React from 'react'

import facebook from '../img/social/facebook.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <p>
            © Copyright 2018 - 2020 Compagnie Rupture de Stock
          </p>
          <div className="social">
            <a title="facebook" href="https://fr-fr.facebook.com/theatre.handicap/" target="_blank">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
