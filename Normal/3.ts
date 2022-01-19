// 插入排序

// 自己整理思路 外层从下标值为1开始 因为 0 可以当作默认是排序的 只需要跟1比较一下就行


const insert = (arr)=>{

  for(let i = 1 ;i<arr.length;i++){

    let j = i
    let tem = arr[j]

    while(j>0&&arr[j-1]>tem){
      arr[j] = arr[j-1]
      j --
    }
    arr[j] = tem
  }
  return arr

}

console.log(insert([6,5,3,1,8,7,2,4]));