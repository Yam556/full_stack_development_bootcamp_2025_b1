class Student {
    static #currentCount= 0;
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    setAge(num) {
            this.age= num;
        }
    fullName(salutation = "Mr.") {
        return `${salutation} ${this.firstName} ${this.lastName}`;
    }

    static count(){
        return this.#currentCount++;
    }
   }
const student_1 = new Student("suman", "kumar", 25, "suman112@gmail.com");
Student.count(); // This will increment the static private field #currentCount
const student_2 = new Student("john", "doe", 30, "john@gmail.com");
Student.count(); // This will increment the static private field #currentCount

//getting the value of the student 1
student_1.gmail;
student_1.#currentCount; // This will return undefined as #currentCount is a private static field
student_1.gmail;
student_1.gmail= "sumankumar122@gmail.com";
//changing the value of the student 1.

student_1.setAge(26);
student_1.age; // This will return 26 which is new age.

const count = Student.count(); // This will return the current count of students created
console.log(`There are ${count} students created.`);

class ProgrammerStudent extends Student {
    constructor(firstName, lastName, age, email, programmingLanguage) {
        super(firstName, lastName, age, email);
        this.programmingLanguage = programmingLanguage;
    }

    getProgrammingLanguage() {
        return this.programmingLanguage;
    }
    setProgrammingLanguage(language) {
        this.programmingLanguage = language;
    }
}
const programmer_1 = new ProgrammerStudent("Alice", "Smith", 28, ["JS", "Python"], "JavaScript");
programmer_1.fullName("Mr"); // This will return "Mr. Alice Smith"
programmer_1.getProgrammingLanguage(); // This will return "JavaScript"
programmer_1.setProgrammingLanguage(["Java","C++"]); // This will set the programming language to "Java","C++"
programmer_1