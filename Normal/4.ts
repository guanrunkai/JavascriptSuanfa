// 希尔排序 在选择排序的基础上 利用gap 减少次数




const shellSort =(arr)=>{

  let len = arr.length

  let gap = Math.floor(len/2)


  while(gap>0){


    for(let i = gap;i<len;i++){

       let j = i
       let tem = arr[i]
      
       while(j>=gap && arr[j-gap]>tem){
         arr[j] = arr[j-gap]
         
         j-=gap
       }
      
       arr[j] = tem
    }
    gap = Math.floor(gap/2)
  }
  
  return arr

}

console.log(shellSort([8,4,7,2,9,1,3,5]));