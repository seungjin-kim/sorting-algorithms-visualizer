export function getHeapSortAnimations(array) {
  const animations = [];
  buildMaxHeap(array, animations);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    animations.push([0, endIdx, "color"])
    animations.push([0, endIdx, "revert"])
    animations.push([0, array[0], endIdx, array[endIdx]])
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array, animations);
  }
  return animations;
}

function buildMaxHeap(array, animations) {
  const firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array, animations);
  }
}

function siftDown(currentIdx, endIdx, heap, animations) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : - 1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    animations.push([currentIdx, idxToSwap, "sift", "down", "color"])
    animations.push([currentIdx, idxToSwap, "sift", "down", "revert"])
    if (heap[idxToSwap] > heap[currentIdx]) {
      animations.push([currentIdx, heap[currentIdx], idxToSwap, heap[idxToSwap]])
      swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}