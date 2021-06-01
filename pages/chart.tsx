import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';

if (typeof Highcharts === 'object') {
	HighchartsExporting(Highcharts);
}

const Chart = (props: HighchartsReact.Props) => {
	const [options, setOptions] = useState({
		title: {
			text: 'My chart',
		},
		series: [
			{
				type: 'line',
				data: [1, 2, 3, 6, 8, 10, 14, 67],
			},
		],
	});

	const updateSeries = array => {
		setOptions({
			title: {
				text: 'My chart',
			},
			series: [
				{
					type: 'line',
					data: array,
				},
			],
		});
	};

	const generateData = array => {
		var tmp,
			current,
			top = array.length;
		if (top)
			while (--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
		updateSeries(array);
	};

	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				{...props}
				updateArgs={[true, true, true]}
			/>
			<button onClick={() => generateData(options.series[0].data)}>
				Change data
			</button>
		</>
	);
};

export default Chart;
