export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  msHelper(array, auxArray, 0, array.length - 1, animations);
  return animations;
}

function msHelper(mainArray, auxArray, startIdx, endIdx, animations) {
  if (startIdx === endIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  msHelper(auxArray, mainArray, startIdx, midIdx, animations);
  msHelper(auxArray, mainArray, midIdx + 1, endIdx, animations);
  mergeArrays(mainArray, auxArray, startIdx, midIdx, endIdx, animations);
}

function mergeArrays(mainArray, auxArray, startIdx, midIdx, endIdx, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = midIdx + 1;
  while (i <= midIdx && j <= endIdx) {
    // i and j are the values being compared - their colors need to be changed
    animations.push([i, j])
    // push them again to revert their color
    animations.push([i, j])
    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= midIdx) {
    animations.push([i, i])
    animations.push([i, i])
    animations.push([k, auxArray[i]])
    mainArray[k++] = auxArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxArray[j]])
    mainArray[k++] = auxArray[j++];
  }
}

