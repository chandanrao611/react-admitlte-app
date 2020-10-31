import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Admin.css';
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home"
        }
    }
    componentDidMount() {
        //////
    }
    render() {
        return (
            <div className="login-area login-bg">
                <div className="container">
                    <div className="login-box">
                        <form className="form-signin" method="post">
                            <div className="login-form-head">
                                {/* <!-- <img id="profile-img" className="profile-user-img img-responsive img-circle" src="assets/img/logo.png"> --> */}
                                <h4>INGAAZ</h4>
                            </div>
                            <div className="login-form-body">
                                <div className="form-gp">
                                    <input type="text" autocomplete="__away" placeholder="Email" name="email" />
                                    <div className="control-group required">
                                        <span className="error-msg"></span>
                                        <span className="error-msg"></span>
                                    </div>
                                </div>
                                <div className="form-gp">
                                    <input type="password" name="password" placeholder="Password" />
                                    <div className="control-group required">
                                        <span className="error-msg"></span>
                                        <span className="error-msg"></span>
                                    </div>
                                </div>
                                <div className="submit-btn-area overlay-area">
                                    <button className="submit-btn-login" type="submit">Sign In </button>
                                    {/* <div *ngIf="isLoading" className="overlay">
              <i className="fas fa-spinner fa-pulse"></i>
            </div> */}
                                </div>
                                <div className="row mb-4 rmber-area">
                                    <div className="col-12">
                                        <p>Forgot your password ? <Link to="" >Recover</Link></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginComponent;