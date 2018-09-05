import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Index extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      answer: -1
    };
  }

  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({answer: await this.asyncFunc() });
  }
 
  render() {
    return (
      <div>
        <h2>Hello 111 class compoment1 - {this.state.answer}</h2>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));