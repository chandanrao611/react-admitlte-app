import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftSideBarComponent extends Component {
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
            <aside className="main-sidebar elevation-4 sidebar-dark-navy">
                <Link to="" className="brand-link">
                    {/* style="opacity: .8"  */}
                    <img src="assets/img/logo192.png" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">CRA</span>
                </Link>
                <div className="sidebar">
                    <nav class="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    <img className="link-img" src="assets/img/home.png"/>&nbsp;
                                    <p> Dashboard </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">
                                    <img className="link-img" src="assets/img/target.png"/>&nbsp;
                                    <p>Profile </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">
                                    <img className="link-img" src="assets/img/group.png"/>&nbsp;
                                    <p>Users </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
export default LeftSideBarComponent;