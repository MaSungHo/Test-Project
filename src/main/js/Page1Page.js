import '../webapp/css/custom.css';
import Customer from '../component/Customer';

import React from 'react';
import ReactDOM from 'react-dom';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customers = [
  {
	'id':1,
	'name': '마성호',
	'birthday': '960809',
	'gender': '남자',
	'job': '대학생' 
  },
  {
	'id':2,
	'name': '김덕연',
	'birthday': '960508',
	'gender': '남자',
	'job': '대학생' 
  },
  {
	'id':3,
	'name': '심승보',
	'birthday': '960309',
	'gender': '남자',
	'job': '대학생' 
  }
]
class Page1Page extends React.Component {

  render() {
    return(
    	<div>
    		{customers.map(c=>{
    			return <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
    		})}
    	</div>
    );
  }
}

ReactDOM.render(<Page1Page/>, document.getElementById('root'));