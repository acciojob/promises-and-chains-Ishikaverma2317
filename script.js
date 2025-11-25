const form = document.querySelector("form");
const btn = document.getElementById("btn");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }


  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});
