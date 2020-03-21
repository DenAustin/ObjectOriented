class Human {
   constructor(name, surName, age, city, dob) {
      this.name = name;
      this.surName = surName;
      this.birthday = new Date(dob)
      this.age = age;
      this.city = city
   };
   salutation(){
      return `Welcome. Your are ${this.name} ${this.surName}, ${this.age} ${this.city}`
   };
   calculateAge(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970)

   };
   getsBaptised(newName,){
      this.name = newName
      
   } 
   //add static method...does not require instantiation and this
   static multiplyNumbers(a, b){
      return(a*b)
   }
}
const holly = new Human("Holly", "Molly", 27, "Espoo");

holly.getsBaptised("Agatha")

 
console.log(holly)

console.log(Human.multiplyNumbers(2,3));


// subClass

class Parent {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName
   }
   greeting(){
      return `Hello my guy ${this.lastName} ${this.lastName}`
   }
};

class Relative extends Parent{
   constructor(firstName, lastName, phone, closeness) {
      super(firstName, lastName);
      this.phone = phone;
      this.closeness = closeness
   }
   static annualDividend(x, y){
      return(x - y)
   }
}

const jude = new Relative("Jude", "Inno", "235-235-2357", "distant")

console.log(jude.greeting());

console.log(jude.greeting());
console.log("Extra pension: ", Relative.annualDividend(31000, 14000));

