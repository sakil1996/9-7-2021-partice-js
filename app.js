const Shakil ='Tinni ';
//console.log(Shakil);


//Conastant

const numbers=[33,44,55,];
numbers[0]=54;
numbers.unshift(66);
//console.log(numbers);


//Let 
let Doctor ='joshim vai';
Doctor ='shakil khan'
console.log(Doctor);
//var

let sum =0;
for(let i =0;i<10;i++){
   sum =sum +i;
   console.log(sum);
}
/// function


function add (num1,num2 =30){
  
      return num1+num2;
         

}
const total =add(12,3)
console.log(total);


// string


const firstName ='justen';
const lastName ='TemviwerLake';
 const fullName = firstName +' '+ lastName +' is a good boy';
 const fullName2 =`${firstName} ${100+555} is good boy.`
 
 console.log(fullName2);
 // multiline


 const multiline =`i love Bangladesh just live in Bangladesh`
 console.log(multiline);
// function Declear


 const declear = num3 => num3*2;
const ruselt = declear(53);
console.log(ruselt);
//addd
 const addIn =(x,y,Z) => x+y+Z;
  total3 =addIn(3,4,5);
 console.log(total3);
//concat 


const age =[12,33,44,55];
const age2 =[66,77];
const totalAge =[...age,...age2]
console.log(totalAge);
//muxsimum


const busnisse =449;
const sochib =4555;
const shop=588;
const takaPoish =[88778,776,888];
const muxsimum =Math.max(...takaPoish);


console.log(muxsimum);
///class


class student {
constructor(sid,sname)
{
this.id =sid;
this.name=sname;




}



}
const student1 =new student(2332,'shakil');
const student2 =new student(444,'sovo');
const student3 =new student(444,'habib');
console.log(student1.name,student2.id,student3);
// object
 

const person ={name:"Md.sakil",age:25,job:"facebook",address:'badda',phone:'0171444990', frind:["shahin","sany" ,"rony"]}

console.log(person.job);
