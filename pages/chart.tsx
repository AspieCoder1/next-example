import Highcharts, { chart } from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';
import _ from 'lodash';

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

	const updateSeries = array => {
		setOptions((prevOptions: Highcharts.Options) => ({
			...prevOptions,
			series: [
				{
					type: 'line',
					data: array,
				},
			],
		}));
	};

	return (
		<Layout home={false}>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				{...props}
				updateArgs={[true, true, true]}
			/>
			<button onClick={() => updateSeries(_.shuffle(data))}>Change data</button>
		</Layout>
	);
};

export default Chart;
