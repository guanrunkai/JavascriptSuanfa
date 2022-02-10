

let arr = [7,6,5,4,8,9,1,3,10]


const maopao = (Arr)=>{


  for(let i = Arr.length ; i > 0 ; i --){

    for(let j = 0 ; j < i ;j ++){

        if(arr[j]>arr[j+1]){
          let tem = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = tem
        }
    }
  }
  return Arr

}

const swap = (i,j,arr)=>{

   let tem = arr[i]
   arr[i] = arr[j]
   arr[j] = tem 

}

const getP = (left,right,arr)=>{

  let center = Math.floor((left + right) / 2);

  if(arr[left]>arr[center]){
    swap(left,center,arr)
  }

  if(arr[center]>arr[right]){
    swap(center,right,arr)
  }

  if(arr[left]>arr[center]){
    swap(left,center,arr)
  }

  swap(center,right-1,arr)
   
  return arr[right-1]

}


const quickSort = (left,right,arr)=>{

if(left >= right) return

let point = getP(left,right,arr)

let i = left
let j = right - 1 

while(i<j){

  while(arr[++i]<point){}
  while(arr[--j]>point){}

  if(i<j){
    swap(i,j,arr)
  }
   
}

swap(i,right-1,arr)

quickSort(left,i-1,arr)
quickSort(i+1,right,arr)
return arr

}

console.log(quickSort(0,arr.length,arr));