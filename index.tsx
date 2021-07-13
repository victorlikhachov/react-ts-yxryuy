import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Greeter from './Greeting/Greeter';
import { IGreetingProps } from './Greeting/IGreetingProps';
import { StyledDiv, DivStyle } from './styled/styled-div';
import {
  BodyStyle,
  GridContainer,
  GridItemA,
  GridItemB,
  GridItemC,
  GridItemD,
  GridItemE,
  GridItemF,
  GridItemG,
  GridItemH,
  GridItemI
} from './styled/styled-grid';
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
    const styleForDiv: DivStyle = {
      color: 'green',
      size: 20,
      bold: true,
      fontStyle: 'italic'
    };
    return (
      <>
        <BodyStyle />
        <div>
          <Hello name={this.state.name} />
          <Greeter greeting={this.greeting} />
          <StyledDiv divStyle={styleForDiv}>Hey from styled div!</StyledDiv>
          <div
            style={{
              fontWeight: 'bold',
              fontFamily: 'Arial',
              marginTop: '20px',
              fontSize: 20,
              color: 'DarkRed'
            }}
          >
            Experiments with CSS grid:
          </div>
          <GridContainer>
            <GridItemA>A</GridItemA>
            <GridItemB>B</GridItemB>
            <GridItemC>C</GridItemC>
            <GridItemD>D</GridItemD>
            <GridItemE>E</GridItemE>
            <GridItemF>F</GridItemF>
            <GridItemG>G</GridItemG>
            <GridItemH>H</GridItemH>
            <GridItemI>I</GridItemI>
          </GridContainer>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
