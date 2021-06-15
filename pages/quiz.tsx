import React, { useState } from 'react';
import {
	FormControl,
	FormLabel,
	Radio,
	FormControlLabel,
	RadioGroup,
	Button,
	Typography,
} from '@material-ui/core';

import Layout from '../components/Layout';

const Quiz = (): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const [result, setResult] = useState<string>(null);
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setValue(event.target.value as string);
	};

	const checkAnswer = () => {
		if (value === 'London') {
			setResult('Well done answer is correct');
		} else {
			setResult('Sorry, your answer is incorrect');
		}
	};

	return (
		<Layout>
			<Typography variant='h4' component='h1'>
				Quiz
			</Typography>
			<Typography>What is the capital of the United Kingdom?</Typography>
			<FormControl component='fieldset'>
				<FormLabel component='legend'></FormLabel>
				<RadioGroup
					aria-label='gender'
					name='gender1'
					value={value}
					onChange={handleChange}
				>
					<FormControlLabel value='London' control={<Radio />} label='London' />
					<FormControlLabel
						value='Manchester'
						control={<Radio />}
						label='Manchester'
					/>
					<FormControlLabel
						value='Newcastle'
						control={<Radio />}
						label='Newcastle'
					/>
				</RadioGroup>
				<Button variant='contained' onClick={checkAnswer}>
					Check answer
				</Button>
				<Typography color='textSecondary'>{result}</Typography>
			</FormControl>
		</Layout>
	);
};

export default Quiz;
