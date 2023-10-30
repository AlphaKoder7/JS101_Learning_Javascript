function char(str) {

  let bag=""

  for(let i=0; i<str.length; i++){

    if (str[i]==" ") {

      bag=bag+"-"
    }
    else{
      bag+=str[i]
    }
  }
  console.log(bag)
}

char("I am iron man")
