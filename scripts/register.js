//object literal 
let salon={
    name:"The Fashion Pet",
    address:{
        street:"Palomar",
        zip:"223456",
        city:"San Diego",
        number:"265-K"
    },
    hours:{
        open:"9:00 a.m.",
        close:"5:00 p.m."
    },
    phone:"555-555-555",
    pets:[
        {
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"888-888-888"        
        },
        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"Mixed",
            service:"Grooming",
            owner:"Shaggy",
            phone:"888-888-888"
        },
        {
            name:"Speedy Gonzalez",
            age:70,
            gender:"Male",
            breed:"Mixed",
            service:"Nails cut",
            owner:"Bugs Bunny",
            phone:"888-888-888"
        }
    ]
}

console.log(salon.pets[0]); //displaying scooby

function displaySalonInfo(){
    let tmp=`
    <p>Welcom to the ${salon.name} located in ${salon.address.street}</p>
    <p></p>
    `;
    document.getElementById("info").innerHTML=tmp;
}

displaySalonInfo();