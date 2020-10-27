import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Mans } from './Mans';
import { Models } from './Models';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function CenteredGrid() {
	const [activeWindow, setActiveWindow] = useState('mans');
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<Button
								variant="contained"
								color="primary"
								href="#contained-buttons"
								onClick={() => setActiveWindow('mans')}
							>
								მწარმოებლები
							</Button>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<Button
								variant="contained"
								color="primary"
								href="#contained-buttons"
								onClick={() => setActiveWindow('models')}
							>
								მოდელები
							</Button>
						</Paper>
					</Grid>
					{activeWindow === 'mans' ? (
						<Mans classes={classes} />
					) : (
						<Models classes={classes} />
					)}
				</Grid>
			</div>
		</Container>
	);
}
