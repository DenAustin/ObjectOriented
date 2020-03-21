// create parent object with different prototypes methods
const personPrototypes ={
   salutation: function(){
      return `Hello good friend, ${this.firstName} ${this.lastName}`
   },
   moreBlessing(){
      return `Welcome to town, Mr. ${this.lastName}`
   
   },
   getsMarried(newLastName){
     this.lastName = newLastName

   }
}

const susan = Object.create(personPrototypes);

susan.firstName = "Susan";
susan.lastName = "Christo";
susan.age = "47"

console.log(susan.salutation());
console.log(susan.moreBlessing());

susan.getsMarried("Thomson");
console.log(susan.salutation());

const mojo = Object.create(personPrototypes, {
   firstName: {value: "Kings"},
   lastName: {value: "MojoMoja"},
   country: {value: "Landimawella"}
})

console.log(mojo.moreBlessing());
console.log("Your identity:", mojo);


