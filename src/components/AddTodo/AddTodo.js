import React, { useState } from 'react'
import { Col, Row, Button, FormControl } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';
import s from './AddTodo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

function AddTodo ( {todo, setTodo} ) {

	const [value, setValue] = useState('');

	function saveTodo() {
		if (value )		{
			setTodo(
				[...todo, {
					id: uuidv1(),
					title: value,
					status: true
				}]
			)
			setValue('');
		}
	}

	return (
		<Row>
			<Col className={s.addTodoForm}>
			<FormControl placeholder='title' value={value} onChange={ (e) => setValue(e.target.value) }/>

			<Button className={s.btn} variant='warning' onClick={ saveTodo }><FontAwesomeIcon icon={ faPlus } size="2xl"/></Button>
			</Col>
		</Row>
	);
}

export default AddTodo;