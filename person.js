class Person{
    constructor(name,age,gender,phone,email)
{
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.email=email;
}
// this method return class property
toString(){
    return "Person[name="+this.name+",Age="+this.age+",Gender="+this.gender+",Phoneno="+this.phone+",Email"+this.email+"]";
}
}
const person=new Person("vijaya",22,"female",12345677890,"abcd@xyz.com");
console.log(person.toString());

