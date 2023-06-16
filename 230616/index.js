const person = {
  firstName: "john",
  lastName: "doe",
  age: 18,
  team: 18,
};

console.log(person.team);

const wrapper = document.getElementById("wrapper");

const name1 = document.getElementsByClassName("first_name");
const name2 = document.getElementsByClassName("last_name").innerHTML;

const name3 = document.querySelector(".first_name");

console.log(typeof name1);
console.log(name1);
console.log(name3);

// wrapper.innerHTML = person.firstName + name1 + name2;

name1.innerHTML = person.firstName;
name3.innerHTML = person.firstName
