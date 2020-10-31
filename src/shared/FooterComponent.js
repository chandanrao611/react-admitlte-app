import React, { Component } from 'react';

class FooterComponent extends Component {
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
            <div>
                FooterComponent
            </div>
        )
    }
}
export default FooterComponent;