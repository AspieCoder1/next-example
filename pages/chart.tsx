// import Highcharts, { chart } from 'highcharts';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { useState } from 'react';
import _ from 'lodash';
import Link from 'next/link';

import Layout from '../components/Layout';

if (typeof Highcharts === 'object') {
	HighchartsExporting(Highcharts);
}

const Chart = (props: HighchartsReact.Props) => {
	const chartTitle = 'Test chart';
	const data = [1, 2, 3, 6, 8, 10, 14, 67];

	const [options, setOptions] = useState<Highcharts.Options>({
		title: {
			text: chartTitle,
		},
		series: [
			{
				type: 'line',
				data,
			},
		],
	});

	const stockOptions: Highcharts.Options = {
		title: {
			text: 'My stock chart',
		},
		series: [
			{
				type: 'line',
				data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
			},
		],
	};

	const updateSeries = array => {
		setOptions((prevOptions: Highcharts.Options) => ({
			...prevOptions,
			series: [
				{
					type: 'line',
					data: array,
				},
				{
					type: 'bar',
					data: array,
				},
			],
		}));
	};

	return (
		<Layout home={false}>
			<Link href='/map'>Map</Link>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				{...props}
				updateArgs={[true, true, true]}
			/>
			<button onClick={() => updateSeries(_.shuffle(data))}>Change data</button>
			<h2>Stock chart</h2>
			<HighchartsReact
				highcharts={Highcharts}
				constructorType={'stockChart'}
				options={stockOptions}
			/>
		</Layout>
	);
};

export default Chart;
