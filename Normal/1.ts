// 冒泡排序 

//分析 : 外层循环 控制总循环次数 内层循环控制 挑选人 
// 每一次内层循环的结束 代表一个值沉底 代表下一次外层循环的开始
let arr = [8,4,7,1,5,9,4,3]

const bubbleSort = (arr)=>{

  for(let i = arr.length; i > 0 ;i -- ){

    for(let j = 0 ; j < i;j++){
         
        if(arr[j]>arr[j+1]){
          let tem = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = tem
        }
    }

  }
  return arr
}

console.log(bubbleSort(arr)); 