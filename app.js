/*
even/odd checker
*/ 

let a=10;

if(a%2===0)
{
    console.log("even no.");
}
else{
    console.log("odd no");
}

// maximum of 3 numbers

let b=4,c=10,d=3;

if(b>=c && b>=d)
{
    console.log("max no ",b)


}
else if(c>=b && c>=d)
{

    console.log("max no ",c)
}

else{

    console.log("max no ",d);
}

//grade calculator

    let per=77;

  if (per >= 90) 
  {
console.log(" grade: A+");
  }


  else if (per >= 80)
      console.log(" A");

  else if (per >= 70) 
    console.log("grade: B");

  else if (per >= 60) 
    console.log("grade: C");

  else if (per >= 50) 
    console.log("grade: D");

  else console.log("grade: Fail");

//positive/negative/zero checker
let n = -5;

if (n  > 0) {

    console.log("positive number");
} 
else if (n < 0) {

    console.log("negative number");
} else {
    console.log("zero");
}