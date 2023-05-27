import React, { Component } from 'react';

class AddressDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
    }

    render() {
        return (
            <div>
                {this.state.ipAddress}
            </div>
        );
    }
}

export default AddressDisplay;