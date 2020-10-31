import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../shared/HeaderComponent';
import LeftSideBarComponent from '../shared/LeftSideBarComponent';
class HomeComponent extends Component {
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
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-business-time"></i></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Registered Business</span>
                                            <span className="info-box-number"> 111 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header border-transparent">
                                            <h3 className="card-title">Latest Orders</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table m-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Order ID</th>
                                                            <th>Item</th>
                                                            <th>Status</th>
                                                            <th>Popularity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Link to="">OR9842</Link></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span className="badge badge-success">Shipped</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="card-footer clearfix">
                                            <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                                            <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default HomeComponent;