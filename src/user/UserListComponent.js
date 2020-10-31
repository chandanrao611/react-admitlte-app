import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../shared/HeaderComponent';
import LeftSideBarComponent from '../shared/LeftSideBarComponent';
class UserListComponent extends Component {
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
                                        <li className="breadcrumb-item"><Link to="">Home</Link></li>
                                        <li className="breadcrumb-item active">Dashboard v2</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header callout callout-info">
                                            <h3 className="card-title">Responsive Hover Table</h3>
                                            <div className="card-tools">
                                                <button type="button"
                                                    data-backdrop="static" data-keyboard="false" data-toggle="modal"
                                                    data-target="#addbranchmodal"
                                                    className="btn btn-block bg-gradient-success btn-sm">Success</button>
                                            </div>
                                        </div>
                                        <div className="card-body table-responsive p-0 overlay-area">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>User</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Reason</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>183</td>
                                                        <td>John Doe</td>
                                                        <td>11-7-2014</td>
                                                        <td><span className="tag tag-success">Approved</span></td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>219</td>
                                                        <td>Alexander Pierce</td>
                                                        <td>11-7-2014</td>
                                                        <td><span className="tag tag-warning">Pending</span></td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>657</td>
                                                        <td>Bob Doe</td>
                                                        <td>11-7-2014</td>
                                                        <td><span className="tag tag-primary">Approved</span></td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>175</td>
                                                        <td>Mike Doe</td>
                                                        <td>11-7-2014</td>
                                                        <td><span className="tag tag-danger">Denied</span></td>
                                                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card-footer clearfix">
                                            {/* <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                                            <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>





                <div className="modal fade" id="addbranchmodal">
                    <div className="modal-dialog modal-lg">
                        <form method="post">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Add</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default UserListComponent;