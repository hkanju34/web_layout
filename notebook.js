

//Default argument
function hello(msg=" "){
	return msg
}


//arrow function 
const hello = (msg="")=>msg;



// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};
/*output*/
{a: "test", b: true, c: 789}



// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;


//curryin
const addNumbers = (a)=>(b)=>a+b;
const fiveaddion = addNumbers(5);
//output
fiveaddion(10) = 15


//compose
const compose = (f,g)=>(a)=>f(g(a));

//classes

class User{
	constructor(fname,lname,age){
		this.fname = fname;
		this.lname = lname;
		this.age = age;
	}
	personal(){
		console.log(`proposed user ${this.fname}.${this.lname}`);
	}
}

class Student extends User{
	constructor(fname,lname,age){
		super(fname,lname,age)
	}
	club(){
		console.log(`your ${this.age} years old, your club is Tours`);
	}
}


const student = new Student('hassan','kanju',32);


