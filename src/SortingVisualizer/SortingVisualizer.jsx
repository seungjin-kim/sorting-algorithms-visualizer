import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../Algorithms/mergeSort.js'
import {getBubbleSortAnimations} from '../Algorithms/bubbleSort.js'
import {getQuickSortAnimations} from '../Algorithms/quickSort.js'
import {getHeapSortAnimations} from '../Algorithms/heapSort.js'
import Topbar from './navBar.jsx'


const MS_ANIMATION_SPEED = 2.5;
const NUM_OF_ARRAY_BARS = 140
const PRIMARY_COLOR = '#93aed2';
const SEC_COLOR = 'magenta';
const TER_COLOR = 'lime';
// const SEC_COLOR = 'crimson';
// const TER_COLOR = 'lime';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      isDisabled: false,
    };
  }

  toggleButtonStatus(callback) {
    this.setState({
      isDisabled: true
    });
    
    setTimeout(() => callback(), 100);
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUM_OF_ARRAY_BARS; i++) {
      array.push(generateRandomInt(5, 680));
    }
    this.setState({array});
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (animations[i].length === 2) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = SEC_COLOR;
          barTwoStyle.backgroundColor = SEC_COLOR;
        }, i * MS_ANIMATION_SPEED);
      }

      else if (animations[i].length === 3) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * MS_ANIMATION_SPEED);
      }

      else {
        setTimeout(() => {
          const [barOneIdx, heightOne, barTwoIdx, heightTwo] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${heightTwo}px`;
          barTwoStyle.height = `${heightOne}px`;
        }, i * MS_ANIMATION_SPEED)
      }
    }

    setTimeout(() => this.setState({
      isDisabled: false
    }), animations.length * MS_ANIMATION_SPEED);
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (animations[i].length === 2) {
        // Color single pivot index
        if (animations[i][1] === "color") {
          const [barOneIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = TER_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
        // Revert color single pivot index
        else {
          const [barOneIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
      }
      else if (animations[i].length === 3) {
        // color left and right
        if (animations[i][2] === "color") {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SEC_COLOR;
            barTwoStyle.backgroundColor = SEC_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
        // revert color left and right
        else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
      }
      else if (animations[i].length === 5) {
        // color left/right and pivot
        if (animations[i][4] === "color") {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SEC_COLOR;
            barTwoStyle.backgroundColor = SEC_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
        else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeightTwo}px`;
          barTwoStyle.height = `${newHeightOne}px`;
        }, i * MS_ANIMATION_SPEED);
      }
    }

    setTimeout(() => this.setState({
      isDisabled: false
    }), animations.length * MS_ANIMATION_SPEED);
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (animations[i].length === 3) {
        if (animations[i][2] === "color") {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SEC_COLOR;
            barTwoStyle.backgroundColor = SEC_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
        else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
      }
      else if (animations[i].length === 5) {
        if (animations[i][4] === "color") {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = TER_COLOR;
            barTwoStyle.backgroundColor = TER_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
        else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * MS_ANIMATION_SPEED);
        }
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeightTwo}px`;
          barTwoStyle.height = `${newHeightOne}px`;
        }, i * MS_ANIMATION_SPEED);
      }
    }

    setTimeout(() => this.setState({
      isDisabled: false
    }), animations.length * MS_ANIMATION_SPEED);

  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isChangeColor = i % 3 !== 2;
      if (isChangeColor) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SEC_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * MS_ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * MS_ANIMATION_SPEED)
      }
    }

    setTimeout(() => this.setState({
      isDisabled: false
    }), animations.length * MS_ANIMATION_SPEED);

  }

  render() {
    const {array} = this.state;

    return (
      <div className="main-container" style={{backgroundColor:'#ededed'}}>
        <Topbar 
          resetArray={() => this.resetArray()}
          bubbleSort={() => this.bubbleSort()}
          quickSort={() => this.quickSort()}
          heapSort={() => this.heapSort()}
          mergeSort={() => this.mergeSort()}
          toggleButtonStatus={(callback) => this.toggleButtonStatus(callback)}
          isDisabled={this.state.isDisabled}
        />

        <Container className="array-container" fluid={true}>
          <Row>
            <Col>
              {array.map((value, idx) => (
                <div 
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                    width: '4px',
                    display: 'inline-block',
                    margin: '0 1px',
                  }}></div>
              ))}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function generateRandomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
