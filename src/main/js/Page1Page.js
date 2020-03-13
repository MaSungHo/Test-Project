import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customers = [
	{
		'id': 1,
		'name': '마성호',
		'birthday': '960809',
		'gender': '남',
		'job': '대학생'
	},
	{
		'id': 2,
		'name': '심승보',
		'birthday': '960309',
		'gender': '남',
		'job': '대학생'
	},
	{
		'id': 3,
		'name': '김덕연',
		'birthday': '960508',
		'gender': '남',
		'job': '대학생'
	}
]

class Page1Page extends React.Component {

  render() {
    return(
    	<div className="page1">
    		<Table>
    			<TableHead>
    				<TableRow>
    	    			<TableCell>번호</TableCell>
    	     			<TableCell>이름</TableCell>
    	     			<TableCell>생년월일</TableCell>
    	     			<TableCell>성별</TableCell>
    	     			<TableCell>직업</TableCell>
    	    		 </TableRow>
    	    	</TableHead>
    	     </Table>
    	</div>
    );
  }
}

ReactDOM.render(<Page1Page/>, document.getElementById('root'));