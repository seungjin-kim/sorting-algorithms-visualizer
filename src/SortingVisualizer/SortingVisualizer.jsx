import React from 'react';
import './SortingVisualizer.css';

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
    for (let i = 0; i < 320; i++) {
      array.push(generateRandomInt(5, 820));
    }
    this.setState({array});
  }

  bubbleSort() {}

  quickSort() {}

  heapSort() {}

  mergeSort() {
    const jsSortedArray = this.state.array
      .slice()
      .sort((a, b) => a - b);
    const sortedArray = algorithms.mergeSort(this.state.array);

    console.log(testArrayEquality(jsSortedArray, sortedArray));
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div 
            className="array-bar"
            key={idx}
            style={{height: `${value}px`}}></div>
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