import './Signup.css';
import iconList from "../images/icon-list.svg"
import illustrationDesktop from "../images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../images/illustration-sign-up-mobile.svg"

function Signup() {
    return (
        <div className='card'>
            <div className="signup-container">
                <div className="left">
                    <h1>Stay updated!</h1>
                    <p>
                        Join 60,000+ product managers mostly receiving monthly updates on:
                    </p>
                    <div className="list-box">
                        <div className='single-list'>
                            <img src={iconList}></img>
                            <p>
                                Product discovery and building what matters
                            </p>
                        </div>
                        <div className='single-list'>
                            <img src={iconList}></img>
                            <p>
                                Measuring to ensure updates are a success
                            </p>
                        </div>
                        <div className='single-list'>
                            <img src={iconList}></img>
                            <p>
                                And much more!
                            </p>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='emailBox'>
                            <div className='email-state'> Email address </div>
                        </div>
                        <input className='inputEmail'
                            type="email"
                            placeholder="email@company.com"
                        />
                        <button className='subscribeButton'> 
                            Subscribe to monthly newsletter
                        </button>
                    </div>
                </div>
                <picture className="right">
                    <source media="(max-width: 950px)" srcSet={illustrationMobile}/>
                    <img src={illustrationDesktop} />
                </picture>
            </div>
        </div>
    )
}

export default Signup;