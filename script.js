const dogApi = "https://dog.ceo/api/breeds/image/random";
const genderApi = "https://api.genderize.io/?name=";
const ageApi = "https://api.agify.io/?name=";
const nationApi = "https://api.nationalize.io/?name=";

let btn = document.getElementById("get-btn");
let input = document.querySelector("input");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let nationality = document.getElementById("nationality");
let image = document.getElementById("dog-img");

btn.addEventListener("click", function () {
  getGender(input.value), getNationality(input.value), getAge(input.value);
});
/* fetch data from dogApi */
function getRandomDog() {
  fetch(dogApi)
    .then((res) => res.json())
    .then((data) => {
      image.innerHTML = `<img src=${data.message} alt="dog" />`;
    });
}
getRandomDog();

/* fetch  gender */
async function getGender(name) {
  let res = await fetch(genderApi + name);
  let data = await res.json();
  gender.textContent = ` Gender: ${data.gender}`;
}

/* fetch age */
async function getAge(name) {
  let res = await fetch(ageApi + name);
  let data = await res.json();
  age.textContent = `Age: ${data.age}`;
}
/* fetch nationality */
async function getNationality(name) {
  let res = await fetch(nationApi + name);
  let data = await res.json();
  let arr = data.country;
  let list = [];
  arr.forEach((element) => {
    list.push(element.country_id);
    nationality.textContent = `Nationality: ${list}`;
  });
}
