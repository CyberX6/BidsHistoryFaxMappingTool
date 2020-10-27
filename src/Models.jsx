import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export const Models = ({ classes }) => {
	const [localMans, setLocalMans] = React.useState([]);
	const [foreignMans, setForeignMans] = React.useState([]);
	const [selectedLocalMan, setSelectedLocalMan] = useState('');
	const [selectedForeignMan, setSelectedForeignMan] = useState('');
	const [localModels, setLocalModels] = useState([]);
	const [foreignModels, setForeignModels] = useState([]);
	const [selectedLocalModel, setSelectedLocalModel] = useState('');
	const [selectedForeignModel, setSelectedForeignModel] = useState('');
	const [rows, setRows] = useState([]);

	useEffect(
		() =>
			fetch(
				process.env.REACT_APP_API_ENDPOINT +
					'leadGenerator/getMappedModels'
			)
				.then(res => res.json())
				.then(res => setRows(res.data)),
		[]
	);

	useEffect(
		() =>
			fetch(
				process.env.REACT_APP_API_ENDPOINT +
					'leadGenerator/getMans?type=eveything'
			)
				.then(res => res.json())
				.then(res => setForeignMans(res.data)),
		[]
	);

	useEffect(
		() =>
			fetch(process.env.REACT_APP_API_ENDPOINT + 'leadGenerator/mans')
				.then(res => res.json())
				.then(res => setLocalMans(res.data)),
		[]
	);

	const handleMapping = () => {
		if (selectedLocalModel && selectedForeignModel) {
			let localModel = localModels.find(
				model => model.model_id === selectedLocalModel
			);

			let foreignModel = foreignModels.find(
				model => model.slug === selectedForeignModel.slug
			);

			fetch(
				process.env.REACT_APP_API_ENDPOINT + 'leadGenerator/setModelID',
				{
					method: 'POST',
					body: JSON.stringify({
						man_id: selectedLocalMan,
						model_name: selectedForeignModel.name,
						local_id: selectedLocalModel,
						slug: selectedForeignModel.slug
					})
				}
			).then(() => {
				setRows([
					{
						model_name: localModel.model_name,
						name: foreignModel.name,
						slug: foreignModel.slug
					},
					...rows
				]);
				setSelectedForeignModel('');
				setSelectedLocalModel('');
				let updatedLocalModels = localModels.filter(
					model => model !== localModel
				);
				let updatedForeignModels = foreignModels.filter(
					model => model !== foreignModel
				);
				setLocalModels(updatedLocalModels);
				setForeignModels(updatedForeignModels);
			});
		}
	};

	const handleLocalManSelect = value => {
		setSelectedLocalMan(value);

		fetch(`http://api2.loc/ka/leadGenerator/getLocalModels?man_id=${value}`)
			.then(res => res.json())
			.then(res => setLocalModels(res.data));
	};

	const handleForeignManSelect = value => {
		setSelectedForeignMan(value);

		fetch(
			`http://api2.loc/ka/leadGenerator/getForeignModels?man_id=${value}`
		)
			.then(res => res.json())
			.then(res => setForeignModels(res.data));
	};

	return (
		<React.Fragment>
			<Grid item xs={2}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">
						MyAuto
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedLocalMan}
						onChange={event =>
							handleLocalManSelect(event.target.value)
						}
					>
						{localMans.length &&
							localMans.map(man => (
								<MenuItem key={man.man_id} value={man.man_id}>
									{man.man_name}
								</MenuItem>
							))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">
						Models
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedLocalModel}
						onChange={event =>
							setSelectedLocalModel(event.target.value)
						}
					>
						{localModels.length &&
							localModels.map(model => (
								<MenuItem
									key={model.model_id}
									value={model.model_id}
								>
									{model.model_name}
								</MenuItem>
							))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">
						BidsHistory
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedForeignMan}
						onChange={event =>
							handleForeignManSelect(event.target.value)
						}
					>
						{foreignMans.length &&
							foreignMans.map(man => (
								<MenuItem
									key={man.foreign_id}
									value={man.foreign_id}
								>
									{man.name}
								</MenuItem>
							))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">
						Models
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedForeignModel}
						onChange={event =>
							setSelectedForeignModel(event.target.value)
						}
					>
						{foreignModels.length &&
							foreignModels.map(model => (
								<MenuItem key={model.slug} value={model}>
									{model.name}
								</MenuItem>
							))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2}>
				<Paper className={classes.paper}>
					<Button
						variant="contained"
						color="primary"
						href="#contained-buttons"
						onClick={handleMapping}
					>
						დამეპვა
					</Button>
				</Paper>
			</Grid>
			<Grid item xs={7}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>MyAuto</TableCell>
								<TableCell>BidsHistory</TableCell>
								<TableCell>წაშლა</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<TableRow key={row.slug}>
									<TableCell component="th" scope="row">
										{row.model_name}
									</TableCell>
									<TableCell>{row.name}</TableCell>
									<TableCell
										style={{ cursor: 'pointer' }}
										onClick={() => alert(row.slug)}
									>
										x
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</React.Fragment>
	);
};
