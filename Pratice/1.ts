

// 冒泡排序思路 
// 外层循环控制次数 内层循环 将数组排序 如果前面比后面大 就交换

let nowArr = [10,2,4,3,5,8,7,9,1]
//冒泡

// const bubbleSort = (arr)=>{

  
//    for(let i = arr.length;i>0;i--){

      
//      for(let j = 0;j < i ; j++){

//         if(arr[j]>arr[j+1]){
           
//            let now = arr[j]
//            arr[j] = arr[j+1]
//            arr[j+1] = now
//         }
//      }
     

//    }
//    return arr

// }

// console.log(bubbleSort(nowArr));


//选择排序 每次选出最小的位置 在跟外层循环的每个点交换

// const selectSort = (arr)=>{


//    for(let i = 0;i<arr.length-1;i++){
   
//      let min = i
//      for(let j = min+1;j<arr.length;j++){
        
//         if(arr[min]>arr[j]){
//            min = j
//         }
//      }

//      let now = arr[min]
//      arr[min] = arr[i]
//      arr[i] = now
//    }

//    return arr

// }

// console.log(selectSort(nowArr));

// const insertSort = (arr)=>{


//    for(let i = 1;i<arr.length;i++){

//     let j = i
//     let tem = arr[i]

//     while(j>0 && arr[j-1]>tem){
   
//       arr[j] = arr[j-1]
      
//       j--
//     }
   
//     arr[j] = tem

//    }

// return arr
// }

// console.log(insertSort(nowArr));


// const xierSort =(arr)=>{
 
//   let gap = Math.floor(arr.length/2)

//    while(gap>0){

//     for(let i = gap;i<arr.length;i++){

//       let j = i
//       let tem = arr[i]
  
//       while(j>=gap && arr[j-gap]>tem){
//         arr[j] = arr[j-gap]
//         j-=gap
//       }
  
//     arr[j] = tem
//      }

//      gap = Math.floor(gap/2)
//    }

//    return arr
   


// }

// const xierSort = (arr)=>{

//   let gap = Math.floor(arr.length/2)

//   while(gap>0){

//    for(let i = gap;i<arr.length;i++){
    
//      let j = i
//      let tem = arr[i]

//      while(j>=gap && arr[j-gap]>tem){
//        arr[j] = arr[j-gap]
//        j -=gap
//      }
//      arr[j] = tem

//    }
//    gap = Math.floor(gap/2)
  
//   }
//   return arr

// }

const swapA = (left, right, arr) => {
  let now = arr[left];
  arr[left] = arr[right];
  arr[right] = now;
};

const getPointA = (left, right, arr) => {
  let center = Math.floor((left + right) / 2);

  if (arr[left] > arr[center]) {
    swapA(left, center, arr);
  }

  if (arr[center] > arr[right]) {
    swapA(center, right, arr);
  }

  if (arr[left] > arr[center]) {
    swapA(left, center, arr);
  }

  swapA(center, right - 1, arr);

  return arr[right - 1];
};

const quickSort123 = (left,right,arr)=>{

  if(left>=right) return

  let point = getPointA(left,right,arr)

  let i = left
  let j = right - 1

  while(i<j){

    console.log(++i);
    while(arr[++i]<point){}
    while(arr[--j]>point){}

    if(i<j){
      swapA(i,j,arr)
    }  

  }
  
   
  swapA(i,right-1,arr)

  quickSort123(left,i-1,arr)
  quickSort123(i+1,right,arr)
  return arr

}


console.log(quickSort123(0,nowArr.length-1,nowArr));
