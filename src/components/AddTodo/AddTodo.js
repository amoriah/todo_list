import React, { useState } from 'react'
import { Col, Row, Button, FormControl, FormGroup,  FormLabel } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';
import s from './AddTodo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

function AddTodo ( {todo, setTodo} ) {

	const [value, setValue] = useState('');
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');

	function saveTodo() {
		if (value && value1 && value2) 		{
			setTodo(
				[...todo, {
					id: uuidv1(),
					title: value,
					desc: value1,
					data: value2,
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
			<FormControl placeholder='description' value1={value1} onChange={ (e) => setValue1(e.target.value) }/>
			<FormControl placeholder='deadline' type="data" value2={value2} onChange={ (e) => setValue2(e.target.value) }/>

			<FormGroup controlId="formFileLg" className={s.mb-3}>
          		<FormControl type="file" size="lg"id={s.formFileLg}/>
     		 </FormGroup>

			<Button className={s.btn} variant='warning' onClick={ saveTodo }><FontAwesomeIcon icon={ faPlus } size="2xl"/></Button>
			</Col>
		</Row>
	);
}

export default AddTodo;