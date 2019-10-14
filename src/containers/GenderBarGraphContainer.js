
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChartWrapper from '../components/genderBarGraph/ChartWrapper';
import GenderDropdown from '../components/genderBarGraph/GenderDropdown';

export default class GenderBarGraphContainer extends Component {
    state = {
        gender: "men"
    }

    genderSelected = (gender) => this.setState({ gender })

    render() {
        return (
            <div style={{ paddingBottom: 90 }}>


                <Row>
                    <Col xs={12}><GenderDropdown genderSelected={this.genderSelected} /></Col>
                </Row>
                <Row>
                    <Col xs={12}><ChartWrapper gender={this.state.gender} /></Col>
                </Row>
            </div>
        );
    }
}


