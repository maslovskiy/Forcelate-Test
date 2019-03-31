import React, { Component } from 'react';

import CustomButton from './components/Buttons/CustomButton';
import CustomForm from './components/Form/CustomForm';
import CustomTable from './components/Table/CustomTable';
import CreateRow from './utils/creator'
import RandomItem from './utils/randomItem'

import './App.css';
import './index.scss';

class App extends Component {

	constructor(props) {
		super(props);
		this._formRef = React.createRef();
	}
state = {
	fisrtTableRow: [],
	secondTableRow: [],

	openedModal: false,
	
	firstTableHead: [
			{
				id: 'id',
				title: 'Call Controll'
			},
			{ 
				id: 'id2',
				title: 'Read'
			},
			{
				id: 'id3',
				title: 'Sound / Auto Call'
			},
			{ 
				id: 'id4',
				title: 'Truck'
			},
			{ 
				id: 'id5',
				title: 'Origin'
			},
			{ 
				id: 'id6',
				title: 'Destanation'
			},
			{ 
				id: 'id7',
				title: 'Pickup'
			},
			{ 
				id: 'id8',
				title: 'DH-O'
			},
			{ 
				id: 'id9',
				title: 'DH-D'
			},
			{ 
				id: 'id10',
				title: 'F/P'
			},
			{ 
				id: 'id11',
				title: 'Length'
			},
			{ 
				id: 'id12',
				title: 'Weight'
			},
			{ 
				id: 'id13',
				title: 'Trip'
			},
			{ 
				id: 'id14',
				title: 'Alarm'
			},
			{ 
				id: 'id15',
				title: 'Actions'
			},
	],
	secondTableHead: [
		{
			id: '345345',
			title: 'Rate'
		},
		{ 
			id: '34535345',
			title: 'F'
		},
		{
			id: '252345',
			title: 'Source'
		},
		{ 
			id: '235256',
			title: 'Age'
		},
		{ 
			id: '252525',
			title: 'Avail'
		},
		{ 
			id: '23522',
			title: 'Truck'
		},
		{ 
			id: '235235',
			title: 'Truck-O'
		},
		{ 
			id: '2345345345',
			title: 'DH-O'
		},
		{ 
			id: '2535366',
			title: 'F/P'
		},
		{ 
			id: '3356645',
			title: 'Origin'
		},
		{ 
			id: '14235345',
			title: 'Trip'
		},
		{ 
			id: '463456',
			title: 'Destanation'
		},
		{ 
			id: '1312',
			title: 'DH-D'
		},
		{ 
			id: '3453',
			title: 'Truck-O'
		},
		{ 
			id: '3534534',
			title: 'Length'
		},
		{ 
			id: '532',
			title: 'Weight'
		},
		{ 
			id: '5345',
			title: 'Company'
		},
		{ 
			id: '432234',
			title: 'Phone'
		},
],
}

openModal = () => {
	this.setState({
		openedModal: true
	});
}
onFormSubmit = (e) => {

	e.preventDefault();

	let inputList = this._formRef.current.childNodes;
	let tempArray = [];

	inputList.forEach((e) => {

		const newItem = new CreateRow (e.value);

		tempArray = [...tempArray].concat(newItem);

		e.value = '';

	});

	this.setState({

		fisrtTableRow: [...this.state.fisrtTableRow,[...tempArray]],

		openedModal: false

	});

}
createRandomItem = () => {

	let newItem ;
	let arr = [];

	for (let i = 0; i < this.state.secondTableHead.length; i++) {
		newItem = new RandomItem();
		arr.push(newItem);
	}
	return arr
}
play = () => {
	for(var i = 1; i <= 5; i++) {
		setInterval(() => {
			let tempArray = [];
			tempArray = [...tempArray,[...this.createRandomItem()]];
			this.setState({
				secondTableRow: [...this.state.secondTableRow,...tempArray]
			});
		}, 5000);
	}
	

}
removeAll = (row) => {
	if( row === 'first' ) {
		this.setState({
			fisrtTableRow: []
		});
	}else if( row === 'second' ) {
		this.setState({
			secondTableRow: []
		});
	}
	

}
render() {

return ( <div className="App">
	<section className="f-section">
		<CustomForm
			heading = {this.state.firstTableHead}
			onClick = {this.onFormSubmit}
			onChange = {this.onChangeValue}
			formRef = {this._formRef}
			opened = {this.state.openedModal}
		/>

		<header className="f-section__header">
			<h5 className="f-section__header-title">Post Trucks</h5>
			<div className="f-section__header-controls">
				<CustomButton type={'play'} onClick={ this.play } name={ 'Play' } />
				<CustomButton type={'add'} onClick={ this.openModal } name={ 'New' } />
				<CustomButton type={'remove'} onClick={ () => this.removeAll('first') } name={ 'Delete All' } />
				<CustomButton type={'redo'} onClick={ this.repostAll } name={ 'Repost All' } />
			</div>
		</header>
		<main className="f-section__main">
			<div className="f-section__table f-section__top-table">
				<CustomTable
					tableHead = {this.state.firstTableHead}
					values = {this.state.fisrtTableRow}
				/>
			</div>
			<div className="f-section__main-inner">
				<h5 className="f-section__header-title">Search results: Total: 2</h5>
				<div className="f-section__main-controls">
					<CustomButton type={'undo'} name={ 'Undo' } />
					<CustomButton type={'clear'} onClick={ () => this.removeAll('second') } name={ 'Clear' } />
				</div>
			</div>
			<div className="f-section__table f-section__bottom-table">
				<CustomTable
					tableHead = {this.state.secondTableHead}
					values = {this.state.secondTableRow}
				/>
			</div>
		</main>
	</section>
</div>
);
}
}

export default App;
