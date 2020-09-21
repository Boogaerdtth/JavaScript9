const colorArray = ['yellow', 'blue', 'red', 'orange'];

// let i = 0;
// while (i < colorArray.length) {

//     console.log(colorArray[i]);
//     i++;

// }


// for (i = 0; i < colorArray; i++) {
//     console.log(colorArray[i]);
// }

colorArray.forEach(element => console.log(element));

// while loop: 5 regels
// for loop: 3 regels
// forEach: 1 regel

// voordelen van array methodes is dat je minder fouten kan maken omdat je minder code hoeft te schrijven. ook vermijdt je hiermee de fout van een infinite loop.


const person = {
    name: 'Jasper',
    age: 29,
    city: 29,
    city: 29,
    city: 29,
    city: 29,
    city: 29,
    city: 29,
    city: 29,
    name: 'Jasper',
    age: 29,
    city: 29,
    city: 29,
    city: 29,
    city: 29,
    email: 3,
    telfoon: 3,
    telefoon: 3,
    adres: 54545,
};

for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
