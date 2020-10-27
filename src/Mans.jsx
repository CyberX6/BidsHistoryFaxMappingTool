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

export const Mans = ({ classes }) => {
	const [localMans, setLocalMans] = React.useState([]);
	const [foreignMans, setForeignMans] = React.useState([]);
	const [selectedLocalMan, setSelectedLocalMan] = useState('');
	const [selectedForeignMan, setSelectedForeignMan] = useState('');
	const [rows, setRows] = useState([]);

	useEffect(
		() =>
			fetch('http://api2.loc/ka/leadGenerator/getMans')
				.then(res => res.json())
				.then(res => setRows(res.data)),
		[]
	);

	useEffect(
		() =>
			fetch('http://api2.loc/ka/leadGenerator/getMans?type=all')
				.then(res => res.json())
				.then(res => setForeignMans(res.data)),
		[]
	);

	useEffect(
		() =>
			fetch('http://api2.loc/ka/leadGenerator/mans')
				.then(res => res.json())
				.then(res => setLocalMans(res.data)),
		[]
	);

	const handleMapping = () => {
		if (selectedLocalMan && selectedForeignMan) {
			let localMan = localMans.find(
				man => man.man_id === selectedLocalMan
			);

			let foreignMan = foreignMans.find(
				man => man.foreign_id === selectedForeignMan
			);

			fetch('http://api2.loc/ka/leadGenerator/setManID', {
				method: 'POST',
				body: JSON.stringify({
					local_id: selectedLocalMan,
					foreign_id: selectedForeignMan
				})
			}).then(() => {
				setRows([
					{
						man_name: localMan.man_name,
						name: foreignMan.name,
						foreign_id: foreignMan.foreign_id
					},
					...rows
				]);
				setSelectedForeignMan('');
				setSelectedLocalMan('');
				let updatedLocalMans = localMans.filter(
					man => man !== localMan
				);
				let updatedForeignMans = foreignMans.filter(
					man => man !== foreignMan
				);
				setLocalMans(updatedLocalMans);
				setForeignMans(updatedForeignMans);
			});
		}
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
							setSelectedLocalMan(event.target.value)
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
						BidsHistory
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedForeignMan}
						onChange={event =>
							setSelectedForeignMan(event.target.value)
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
								<TableRow key={row.foreign_id}>
									<TableCell component="th" scope="row">
										{row.man_name}
									</TableCell>
									<TableCell>{row.name}</TableCell>
									<TableCell
										style={{ cursor: 'pointer' }}
										onClick={() => alert(row.foreign_id)}
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
