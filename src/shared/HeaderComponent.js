import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home"
        };
    }
    componentDidMount() {
        ///////
    }
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" to="#"><i className="fas fa-bars"></i></Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" to="#"> </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" href="#"> </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fas fa-user-cog"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> Change Password</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item">
                                <i className="fas fa-user-circle mr-2"></i>
                                Update Profile </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="javascript:void(0)" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> Logout</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default HeaderComponent;