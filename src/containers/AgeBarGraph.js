import React, { Component } from 'react';
import D3Chart from '../components/ageBarGraph/D3Chart';

export default class AgeBarGraph extends Component {
	componentDidMount() {
		new D3Chart(this.refs.chart)
	}
	
	render() {
		return <>
		<h5 class="card-subtitle mb-2 text-muted">Plotting rectangles on SVG Canvas and color coding based on age, where red color represent age greater than 10</h5> Data:<br></br> {JSON.stringify(data, null, 2) } 
		<div ref="chart"></div>
		</>
	}
}
const data=[{"age":"10","name":"Tony"},{"age":"12","name":"Jessica"},{"age":"9","name":"Andrew"},{"age":"10","name":"Emily"},{"age":"11","name":"Richard"}]