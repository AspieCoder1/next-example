import * as React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartIndicator from 'highcharts/indicators/indicators';
import HighchartPivot from 'highcharts/indicators/pivot-points';
import HighchartMacd from 'highcharts/indicators/macd';
import HighchartsMap from 'highcharts/modules/map';
import { Typography } from '@material-ui/core';

import MapChart from '../components/Map';
import mapData from '../data/mapData';
import Layout from '../components/Layout';
import theme from '../libs/theme';

if (typeof Highcharts === 'object') {
	// This adds a layer of type safety ensures that the type of Highcharts is an object
	HighchartsExporting(Highcharts);
	HighchartIndicator(Highcharts);
	HighchartPivot(Highcharts);
	HighchartMacd(Highcharts);
	HighchartsMap(Highcharts);
}

const Map = (): JSX.Element => {
	const { dark, light } = theme.palette.primary;

	const mapOptions = {
		title: {
			text: '',
		},
		colorAxis: {
			min: 0,
			// stops: [
			// 	[0, '#EFEFFF'],
			// 	[0.67, '#4444FF'],
			// 	[1, '#000022'],
			// ],
			stops: [
				[0, '#EFEFFF'],
				[0.67, light],
				[1, dark],
			],
		},
		tooltip: {
			pointFormatter: function () {
				return this.properties['woe-label'].split(',')[0];
			},
		},
		series: [
			{
				mapData: mapData,
				dataLabels: {
					formatter: function () {
						return this.point.properties['woe-label'].split(',')[0];
					},
				},
				name: 'Norway',
				data: [
					['no-mr', 0],
					['no-st', 1],
					['no-ho', 2],
					['no-sf', 42],
					['no-va', 4],
					['no-of', 5],
					['no-nt', 6],
					['no-ro', 7],
					['no-bu', 8],
					['no-vf', 9],
					['no-fi', 10],
					['no-no', 11],
					['no-tr', 12],
					['no-ak', 13],
					['no-op', 14],
					['no-he', 15],
					['no-os', 16],
					['no-te', 17],
					['no-aa', 18],
				],
			},
		],
	};

	return (
		<>
			<Layout>
				<Typography variant='h4' component='h2'>
					Map
				</Typography>
				<Typography>
					A map that shows the population density of different parts of Norway
				</Typography>
				<MapChart options={mapOptions} highcharts={Highcharts} />
			</Layout>
		</>
	);
};

export default Map;
