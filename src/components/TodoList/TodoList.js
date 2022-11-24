import React, { useEffect, useState } from 'react';
import { Col, Row, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faCheck, faRepeat } from '@fortawesome/free-solid-svg-icons'

function TodoList ({ todo, setTodo }) {

	const [edit, setEdit] = useState(null);
	const [value, setValue] = useState('');
	const [filtered, setFiltered] = useState(todo);

	useEffect( ()=> {
		setFiltered(todo)
	}, [todo])

	function todoFilter(status) {
		if (status === 'all') {
			setFiltered(todo);
		} else {
			let newTodo = [...todo].filter(item => item.status === status)
			setFiltered(newTodo);
		}
	}

	function deleteTodo(id) {
		let newTodo = [...todo].filter(item => item.id !== id);
		setTodo(newTodo);
	}

	function editTodo(id, title) {
		setEdit(id);
		setValue(title);
	}

	function statusTodo(id) {
		let newTodo = [...todo].filter(item => {
			if (item.id === id)	{
				item.status = !item.status;
			}
			return item;
		})
		setTodo(newTodo);
	}

	function saveTodo(id) {
		let newTodo = [...todo].map(item => {
			if (item.id === id) {
				item.title = value
			}
			return item;
		})
		setTodo(newTodo);
		setEdit(null);
	}

	return (
	<div>
		<Row>
			<Col className={s.filter}>
			<ButtonGroup className={s.btns} aria-label="Basic example">
    			<Button variant="secondary" onClick={ ()=>todoFilter('all')}>All</Button>
    			<Button variant="secondary" onClick={ ()=>todoFilter(true)}>Current</Button>
    			<Button variant="secondary" onClick={ ()=>todoFilter(false)}>Complete</Button>
   			</ButtonGroup>
			</Col>
		</Row>
		{
			filtered.map( item => (
			<div className={ s.listItems } key={ item.id }>
				{
				edit === item.id ? 
					<div>
						<FormControl value={ value } onChange={ (e)=>setValue(e.target.value) }/>
					</div>
					:
					<div className={ !item.status ? s.close : '' }>{ item.title }</div>
				}
				{
				edit === item.id ? 
					<div>
						<Button variant="success" onClick={ ()=>saveTodo(item.id) }><FontAwesomeIcon icon={ faSave } size="sm" /></Button>
					</div>
					:
					<div>
						<Button className={ s.btn } variant="danger" onClick={ () => deleteTodo(item.id) } size="sm">
							<FontAwesomeIcon icon={ faTrash } />
						</Button>
						<Button className={s.btn} onClick={ () => editTodo(item.id, item.title) } size="sm">
							<FontAwesomeIcon icon={ faEdit } />
						</Button>
						{
							item.status ?  <Button className={s.btn} variant="success" onClick={ () => statusTodo(item.id) } size="sm"><FontAwesomeIcon icon={ faCheck } /></Button>
							:
							<Button className={s.btn} variant="warning" onClick={ () => statusTodo(item.id) } size="sm"><FontAwesomeIcon icon={ faRepeat } /></Button>
						}
					</div>
				}
			</div>
		))
		}
	</div>
	);
}

export default TodoList;