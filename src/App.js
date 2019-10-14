import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ScatterPlotContainer from "./containers/ScatterPlotContainer"
import AgeBarGraph from "./containers/AgeBarGraph"
import GenderBarGraphContainer from "./containers/GenderBarGraphContainer"

class App extends Component {
  state = {
    showSvgCanvas: true,
    showBarChart: false,
    showScatterPlot: false,
    activeName: null
  }

  showGraph = viewPoint => {
    let viewSvgCanvas = false,
      viewBarChart = false,
      viewScatterPlot = false;

    if (viewPoint === "svgCanvas") {
      viewSvgCanvas = true;
    }
    else if (viewPoint === "barChart") {
      viewBarChart = true;
    }
    else if (viewPoint === "scatterPlot") {
      viewScatterPlot = true;
    }

    this.setState({
      showSvgCanvas: viewSvgCanvas,
      showScatterPlot: viewScatterPlot,
      showBarChart: viewBarChart
    })
  }

  render() {
    console.log("vo ", this.state)
    const { showSvgCanvas, showScatterPlot, showBarChart } = this.state
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>Integration of D3 with React</Navbar.Brand>
        </Navbar>
        <form class="form-inline">
          <button class="btn btn-link" onClick={() => { this.showGraph("svgCanvas") }} type="button">SVG Canvas</button>
          <button class="btn btn-link" onClick={() => { this.showGraph("barChart") }} type="button">Bar chart </button>
          <button class="btn btn-link" onClick={() => { this.showGraph("scatterPlot") }} type="button">Scatter Plot</button>
        </form>
        <Container>

          {showSvgCanvas === true && <div class="card">
            <div class="card-body">
              <h5 class="card-title">Understanding D3 by plotting rectangles using SVG Canvas</h5>
              <AgeBarGraph />

            </div>
          </div>}

          {showBarChart === true && <div class="card">
            <div class="card-body">
              <h5 class="card-title">Adding D3 axis to BarChart and toggling state change on button click</h5>
              <GenderBarGraphContainer />

            </div>
          </div>}

          {showScatterPlot === true && <div class="card">
            <div class="card-body">
              <h5 class="card-title">Adding onclick to data points of scatter plot, and updating data</h5>
              <ScatterPlotContainer />
            </div>
          </div>}
        </Container>

      </div>
    );
  }
}

export default App;
