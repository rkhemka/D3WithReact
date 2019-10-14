
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { json } from 'd3';

import ChartWrapper from '../components/scatterPlot/ChartWrapper';
import Table from '../components/scatterPlot/Table';

export default class ScatterPlotContainer extends Component {
  state = {
    data: [],
    activeName: null
  }

  componentWillMount() {
    json("https://udemy-react-d3.firebaseio.com/children.json")
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }

  updateName = (activeName) => this.setState({ activeName })

  updateData = (data) => this.setState({ data })

  renderChart() {
    if (this.state.data.length === 0) {
      return "No data yet"
    }
    return <ChartWrapper data={this.state.data} updateName={this.updateName} />
  }

  render() {
    return (
      <div>
         
          <Row>
            <Col md={6} xs={12}>{this.renderChart()}</Col>
            <Col md={6} xs={12}><Table data={this.state.data} updateData={this.updateData} activeName={this.state.activeName} /></Col>
          </Row> 
      </div>
    );
  }
}