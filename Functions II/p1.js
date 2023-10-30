function MyJoin(arr,sep){

  let result= "";
  
  for(let i=0; i<arr.length; i++){

    result += arr[i]
    if( i!==arr.length - 1){

      result += sep;
    }
  }
  console.log(result)
}

MyJoin(['Fire','Air','Water']," ")