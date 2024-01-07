import './Signup.css';
import iconList from "../images/icon-list.svg"
import illustrationDesktop from "../images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../images/illustration-sign-up-mobile.svg"
import iconSuccess from "../images/icon-success.svg"
import { useState, useRef } from 'react';

function Signup() {
    const [errorEmail, setErrorEmail] = useState("");
    const [isActiveError, setIsActiveError] = useState(false);
    const [showState, setShowState] = useState(false);
    const inputRefEmail = useRef(null);

    function isValidEmail(email) {
        const pattern =  /^\S+@\S+\.\S+$/;
        return pattern.test(email);
    }

    const switchToSignUp =() => {
        setShowState(false);
    }

    const currentEmailValue =() => {
        return inputRefEmail.current.value;
    }

    const submitEmail =(event) => {
        event.preventDefault();

        if (inputRefEmail.current.value === "" || !isValidEmail(inputRefEmail.current.value)) {
            setErrorEmail("Valid email required");
            setIsActiveError(true);
            setShowState(false);
        }
        else {
            setErrorEmail("");
            setIsActiveError(false);
            setShowState(true);
        }
    }


    const signupState =() => {
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
                                <div className='email-state' ref={inputRefEmail}> Email address </div>
                                <div className='error-state'>{errorEmail}</div>
                            </div>
                            <input className='inputEmail'
                                ref = {inputRefEmail}
                                type="email"
                                placeholder="email@company.com"
                                style={{
                                    borderColor: isActiveError ? "hsl(4, 100%, 67%)" : "",
                                    backgroundColor: isActiveError ? "hsl(4, 100%, 67%, 0.1)" : "",
                                    color: isActiveError ? "hsl(4, 100%, 67%)" : "",
                                }}
                            />
                            <button onClick={submitEmail} className='subscribeButton'> 
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

    const successState =() => {
        return (
            <div className='card'>
                <div className='success-container'>
                    <img src={iconSuccess}></img>
                    <h1>
                        Thanks for subscribing!
                    </h1>
                    <p>
                        A confirmation email has been sent to <span>{currentEmailValue()}</span> 
                        . Please open it and click the button inside to confirm your subscription. 
                    </p>
                    <button onClick={switchToSignUp} className='dismissButton'> 
                        Dismiss message
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='main'>
            {
                showState ? <div>{successState()}</div> : <div>{signupState()}</div> 
            }
        </div>
    );
}

export default Signup;