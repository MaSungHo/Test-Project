import '../webapp/css/custom.css';
import Customer from '../component/Customer';

import React from 'react';
import ReactDOM from 'react-dom';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Page1Page extends React.Component {

  render() {
    return(
    	<Customer/>
    );
  }
}

ReactDOM.render(<Page1Page/>, document.getElementById('root'));