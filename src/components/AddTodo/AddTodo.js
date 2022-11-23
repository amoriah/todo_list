import React, { useState } from 'react'
import { Col, Row, Button, FormControl } from 'react-bootstrap';
import {v4 as uuid} from 'uuid'
import s from './AddTodo.module.css'

function AddTodo ( {todo, setTodo} ) {

	const [value, setValue] = useState('');
	// console.log(value);

	function saveTodo() {
		setTodo(
			[...todo, {
				id: uuid.v4,
				title: value,
				status: true
			}]
		)
		setValue('');
	}

	return (
		<Row>
			<Col className={s.addTodoForm}>
			<FormControl placeholder='add task' value={value} onChange={ (e) => setValue(e.target.value) }/>
			<Button className={s.btn} variant='warning' onClick={ saveTodo } size="sm">Add</Button>
			</Col>
		</Row>
	);
}

export default AddTodo;