//OBJECTS
//object Literal
let player = {
    name: "Nawaraj",   
    lastName: "Doe",
    age: 30,
    email:"johndoe121@gmail.com",

      
}
console.log("the name of the player is: " + player.name);


let store = {
    address1: "5 marine street, Harris Park, 2150",
    address2: "6 allen street, Harris Park, 2150",
    address3: "7 George street, Harris Park, 2150", 
    getCompleteAddress: function() {
        return this.address1 + ", " + this.address2 + ", " + this.address3;
    }
}

console.log("the complete address of the store is: " + store.getCompleteAddress());

let stores = {
    address1: {
        unit: "unit 5",
        street: "6 Harris street",
        suburb: "Harris Park",
        postcode: 2150,
    },
    address2: {
        unit: "unit 7",
        street: "Harris street",
        suburb: "Harris Park",  
        postcode: 2150,
    },
    address3: {
        unit: "unit 8",
        street: "Harris street",
        suburb: "Harris Park",
        postcode: 2150,
    }, 
    getCompleteAddress: function() {
        const completeAddress = `${this.address1.unit} / ${this.address1.street}, ${this.address1.suburb}, ${this.address1.postcode}`
    return completeAddress;
    }
}
console.log("the complete address of the store is: " + stores.getCompleteAddress());


//constructor function- it means that we can create multiple objects with the same properties and methods.
//difference between normal function and constructor function is that constructor function starts with a capital letter and it is used to create objects.

function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
    this.email = email;

    this.getFullName = function(salutation = "Mr.") {
        return salutation + "" + this.firstName + " " + this.lastName;

}
    this.setAge = function(num) {
        this.age = num;
    }
}
const student1 = new Student("Sadhana", "Doe", 30,  "yamk@gmail.com");
const student2 = new Student("yam", "Khadka", 25, "Yamk6285@gmail.com");
console.log(`There are two students with name: ${student1.firstName}, ${student2.firstName}. Their full name is: ${student1.getFullName()} and ${student2.getFullName()}`);





// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes


for (key in student1){
    console.log(student1[key]);
}
console.log(Object.keys(fish));
