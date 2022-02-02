// 选择排序 解释
 // 外层循环 控制总循环次数 内层循环控制每一次的交换人

 // j = 1
 // temp = 5 
 // 

const selectionSort = (arr)=>{

  
  for(let i = 0;i<arr.length-1;i++){

    let min = i
 
    for(let j = min+1;j<arr.length;j++){
      if(arr[min]>arr[j]){
        min = j 
      }
    }

    let now = arr[min]
    arr[min] = arr[i]
    arr[i] = now
    
  }
  return arr
  
}

console.log(selectionSort([1,3,5,0,2,4]))