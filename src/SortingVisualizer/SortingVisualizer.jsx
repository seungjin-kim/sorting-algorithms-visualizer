import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../Algorithms/mergeSort.js'
import {getBubbleSortAnimations} from '../Algorithms/bubbleSort.js'

const MS_ANIMATION_SPEED = 1;
const NUM_OF_ARRAY_BARS = 150
const PRIMARY_COLOR = 'pink';
const SEC_COLOR = 'teal';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUM_OF_ARRAY_BARS; i++) {
      array.push(generateRandomInt(5, 820));
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
  }

  quickSort() {}

  heapSort() {}

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
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div 
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick={() => this.resetArray()}>Reset Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
      </div>
    );
  }
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function generateRandomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function testArrayEquality(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
}