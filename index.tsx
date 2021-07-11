import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Greeter from './Greeting/Greeter';
import { IGreetingProps } from './Greeting/IGreetingProps';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.greeting = {
      message: 'Hello everyone!!!',
      sender: 'Victor'
    };
  }

  private greeting: IGreeting;

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Greeter greeting={this.greeting} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
