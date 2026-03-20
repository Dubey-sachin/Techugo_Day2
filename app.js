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

// primitive data types

let e=10;
 e=20;
 console.log(e);// new value created;

 // non primitive data types

 let obj={name: 'rahul'}
 obj.name='sachin';
 console.log(obj.name);

 // operators

 //airthmetic operators
 let add=4+5;
 let diff=5-3;
 let modulus=5%2;
 let power=3**2;
 let div=4/2;

 console.log(add, diff, modulus, power, div);

 // assignment operators
 /*
 +=
 -=
 %=
 /=
 */

 let a1=10;
 a1 +=5;
 console.log(a1)

 // Comparison operator
 // == : checks only value and ===: it checks value and data types;

 console.log(2=="2");
 console.log(2==="2");

 // logical operator
 // &&: true when both conditions are true and false when  any condition  is false
 let a2=20;
 let b2=30;
 console.log(a2 > 5 && b2 > 15); 
console.log(a2 > 15 && b2 > 15)
// ||: true when any one of the condition is true
// ||: false if all conditon is false;
console.log(a2 <5 || b2<15)
console.log(a2 > 15 || b2 >15)

// !: not

console.log(!true);


// ternary operator

let age=18;
let s=age>=18 ? "Adult" :"Minor";
console.log(s);

/* switch: it is use to execute one block of code out of many options 
it evaluates the expression and based on the value matched with cases it exexute the block of code
value is compared with each case
break statement stop further execution in switch block;
if no cases match, it runs the default statement
*/

let day =1;
let dayname;

switch(day)
{
    case 1:
        dayname="monday";
        break;
    case 2:
        dayname="tuesday";
        break;
    case 3:
        dayname="wed";
        break;
    case 4:
        dayname="thu";
        break;
    case 5:
        dayname="fri";
        break;
    case 6: 
        dayname="sat";
        break;
    case 7:
        dayname="sun";
        break;
    default:
        dayname="invalidday"                       

}

console.log(dayname);