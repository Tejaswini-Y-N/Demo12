let o=[1,2,3,4,5,6,7,8,9]
o.splice(2,5)
console.log(o)
let person=[{name:'Raj',age:40},{name:'virat',age:36},{name:'Riya',age:20}]
person.forEach((ele)=>console.log("The name is "+ele.name+"My age is "+ele.age))
person.forEach((ele,index)=>console.log(ele,index))
let products=[{pname:"Laptop",price:10000},
    {pname:"Mouse",price:1000},
    {pname:"Keyboard",price:1500}]
let res=products.map((ele)=>(
    ele.price+500))
console.log(res)
let r=products.reduce((prev,current)=>{
    return prev+current.price
},0)
console.log(r)
console.log(o.toString())
