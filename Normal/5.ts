const swap = (left, right, arr) => {
  let now = arr[left];
  arr[left] = arr[right];
  arr[right] = now;
};

const getPoint = (left, right, arr) => {
  let center = Math.floor((left + right) / 2);

  if (arr[left] > arr[center]) {
    swap(left, center, arr);
  }

  if (arr[center] > arr[right]) {
    swap(center, right, arr);
  }

  if (arr[left] > arr[center]) {
    swap(left, center, arr);
  }

  swap(center, right - 1, arr);

  return arr[right - 1];
};

const quickSort = (left, right, arr) => {
  if (left >= right) return;

  let point = getPoint(left, right, arr);
 
  let i = left; 
  let j = right - 1; 

  while (i < j) {
    

    while (arr[++i] < point) {}

    while (arr[--j] > point) {}

    if (i < j) {
      swap(i, j, arr);
    }
  }

  swap(i, right - 1, arr);

  quickSort(left, i - 1, arr);
  quickSort(i + 1, right, arr);
  return arr;
};

let c = [8, 5, 6, 7, 1, 9, 3, 2, 0, 10, 15];
console.log(quickSort(0, c.length - 1, c));
