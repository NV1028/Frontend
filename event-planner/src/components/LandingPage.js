import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
    return (
    <div className="landingPage">    
      <h1>Welcome To Corporate Event Planner </h1>
        <div className="landingPageButtons">
            <div>
                <Link to="register"><button class="signup">Signup</button></Link>
            </div>
            <div>
                <Link to='login'><button class="login">login</button></Link>
            </div>
        </div>
    </div>
    )
}

export default LandingPage