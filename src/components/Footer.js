import React from 'react'
import './style/footer.css'
import { Link } from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <div class="ga">
              <div class="elements">
                  <div class="link">
                      <Link to="/">Home</Link>
                      <Link to="/">Companies</Link>
                      <Link to="/">Products</Link>
                      <Link to="/">Privacy</Link>
                    </div>
              </div>
              <div class="ancla">
                  <Link to="/">FLECHA</Link>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer