import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderComponent from '../shared/HeaderComponent';
import LeftSideBarComponent from '../shared/LeftSideBarComponent';
class ProfileComponent extends Component {
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
            <>
                <HeaderComponent />
                <LeftSideBarComponent />
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard v2</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard v2</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card card-primary card-outline">
                                        <div className="card-body box-profile">
                                            <div className="text-center">
                                                {/* <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture"> */}
                                            </div>
                                            <h3 className="profile-username text-center">Nina Mcintire</h3>
                                            <p className="text-muted text-center">Software Engineer</p>
                                            <ul className="list-group list-group-unbordered mb-3">
                                                <li className="list-group-item">
                                                    <b>Followers</b> <a className="float-right">1,322</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Following</b> <a className="float-right">543</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Friends</b> <a className="float-right">13,287</a>
                                                </li>
                                            </ul>
                                            <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                                        </div>
                                    </div>
                                    {/* About me card */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">About Me</h3>
                                        </div>
                                        <div className="card-body">
                                            <strong><i className="fas fa-book mr-1"></i> Education</strong>
                                            <p className="text-muted">B.S. in Computer Science from the University of Tennessee at Knoxvill</p>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                {/* End of profile card  */}
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-header p-2">
                                            <ul className="nav nav-pills">
                                                <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="activity">
                                                    <form className="form-horizontal">
                                                        <div className="form-group row">
                                                            <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                                                            <div className="col-sm-10">
                                                                <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="timeline">
                                                    timeline
                                            </div>
                                                <div className="tab-pane" id="settings">
                                                    settings
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of second section */}
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default ProfileComponent;