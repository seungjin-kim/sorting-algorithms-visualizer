export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  msHelper(array, auxArray, 0, array.length - 1, animations);
  return animations;
}

