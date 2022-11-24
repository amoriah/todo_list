import React from 'react'
import { Row, Col } from 'react-bootstrap';
// import App from '../../App';
import s from './Includes.module.css'

function Includes() {
	return (
		<Row>
			<Col>
			<div className={s.header}>
				<div className={s.root}>Todo list</div>
			</div>
			</Col>
		</Row>
	);
}

export default Includes;