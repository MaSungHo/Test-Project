import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {

	render() {
		return <div className="home">아주 먼 훗날 그때 그 아인 꿈꿔왔던 모든 걸 가진 거냐고</div>;
	}
}

ReactDOM.render(<HomePage/>, document.getElementById('root'));