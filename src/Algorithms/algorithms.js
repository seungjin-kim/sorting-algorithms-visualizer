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
  msHelper(auxArray, startIdx, midIdx, mainArray, animations);
  msHelper(auxArray, midIdx + 1, endIdx, mainArray, animations);
  mergeArrays(mainArray, auxArray, startIdx, midIdx, endIdx, animations);
}

function mergeArrays(mainArray, auxArray, startIdx, midIdx, endIdx, animations) {
  
}