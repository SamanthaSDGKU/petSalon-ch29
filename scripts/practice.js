let student = {
    //attr or properties
    name:"Daniel",
    age:99,
    isActive:true,
    sayHi:function(){
        return "hello";
    },
    hobbies:["Football","Listen music","Play Zelda"],
    address:{
        street:"Palomar",
        zip:"22145",
        city:"San Diego",
        country:"USA"
    }
}

// console.log(student.address);
// document.write(student.address);

let products = [];

let product1={
    name:"Laptop",
    description:"HP laptop 14'' core i7",
    price:200
}
let product2={
    name:"Laptop",
    description:"DELL laptop 14'' core i7",
    price:250
}
let product3={
    name:"PC",
    description:" PC AMD",
    price:300
}

products.push(product1,product2,product3);

function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}

displayNames();