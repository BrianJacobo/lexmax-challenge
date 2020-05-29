export default Footer

import React from 'react'
import './style/footer.css'
import { Link } from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <div className="ga">
              <div className="elements">
                  <div className="link">
                      <Link to="/">Home</Link>
                      <Link to="/">Companies</Link>
                      <Link to="/">Products</Link>
                      <Link to="/">Privacy</Link>
                    </div>
              </div>
              <div className="ancla">
                  <Link to="/home">FLECHA</Link>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer
