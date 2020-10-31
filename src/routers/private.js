// import React from 'react';
// import { Route, Redirect } from 'react-router';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import authAction from '../redux/auth/action';

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest, setReedirectUrl }) => (
//     <Route {...rest} render={props => {
//         if (isAuthenticated) {
//             return <Component {...props} />
//         } else {
//             setReedirectUrl({ path: props.location.pathname });
//             return <Redirect to={{
//                 pathname: '/login',
//                 state: { from: props.location.pathname }
//             }} />
//         }
//     }} />
// );

// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated: state.auth.isAuthenticated,
//     }
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setReedirectUrl: (payload) => dispatch(authAction.setReedirectUrl(payload))
//     }
// }
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));

import React from 'react';
import { Route } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route {...rest} render={props => (
        <Component {...props} />
    )} />
)};

export default PrivateRoute;
