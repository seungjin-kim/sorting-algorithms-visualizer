export function getQuickSortAnimations(array) {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    animations.push([leftIdx, rightIdx, "color"]);
    animations.push([leftIdx, rightIdx, "revert"]);
    animations.push([pivotIdx, "color"]);
    animations.push([pivotIdx, "revert"]);
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      animations.push([leftIdx, array[leftIdx], rightIdx, array[rightIdx]])
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      animations.push([leftIdx, pivotIdx, "left", "pivot", "color"]);      
      animations.push([leftIdx, pivotIdx, "left", "pivot", "revert"]);
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      animations.push([rightIdx, pivotIdx, "right", "pivot", "color"]);      
      animations.push([rightIdx, pivotIdx, "right", "pivot", "revert"]);
      rightIdx--;
    }
  }
  animations.push([pivotIdx, array[pivotIdx], rightIdx, array[rightIdx]])
  swap(pivotIdx, rightIdx, array);
  let leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - rightIdx + 1;
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1, animations);
    quickSortHelper(array, rightIdx + 1, endIdx, animations);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx, animations);
    quickSortHelper(array, startIdx, rightIdx - 1, animations);
  }
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}