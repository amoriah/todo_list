import React, { useState } from 'react';
import { Col, Row, Button, FormControl } from 'react-bootstrap';
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'

function TodoList ({ todo, setTodo }) {

	const [edit, setEdit] = useState(null);
	const [value, setValue] = useState('');

	function deleteTodo(id) {
		let newTodo = [...todo].filter(item => item.id != id);
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
			if (item.id == id) {
				item.title = value
			}
			return item;
		})
		setTodo(newTodo);
		setEdit(null);
	}

	return (
		<div>
			{
				todo.map( item => (
					<div className={s.listItems} key={item.id}>
						{
							edit == item.id ? 
								<div>
									<FormControl value={value} onChange={ (e)=>setValue(e.target.value) }/>
								</div>
								:
								<div className={ !item.status ? s.close : ''}>{ item.title}</div>
							}
							{
							edit == item.id ? 
								<div>
									<Button variant="success" onClick={()=>saveTodo(item.id)}><FontAwesomeIcon icon={ faSave } size="sm" /></Button>
								</div>
								:
								<div>
									<Button className={s.btn} variant="danger" onClick={ () => deleteTodo(item.id) } size="sm"><FontAwesomeIcon icon={ faTrash } /></Button>
									<Button className={s.btn} onClick={ () => editTodo(item.id, item.title) } size="sm"><FontAwesomeIcon icon={ faEdit } /></Button>
									<Button className={s.btn} variant="secondary" onClick={ () => statusTodo(item.id) } size="sm">
										{
											item.status ? <FontAwesomeIcon icon={ faLock } /> :  <FontAwesomeIcon icon={ faLockOpen } />
										}
										 </Button>
								</div>
							}
				</div>
			))
			}
		</div>
	);
}

export default TodoList;