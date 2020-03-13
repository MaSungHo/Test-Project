import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {
  
  render() {
    return <div className="main">이게 메인 페이지 역할임</div>;
  }
}

ReactDOM.render(<MainPage/>, document.getElementById('root'));
