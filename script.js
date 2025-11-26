document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  // ✅ Validation
  if (!age || !name) {
    alert("Please enter valid details");
    return;
  }

  // ✅ Promise
  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  votingPromise
    .then((message) => alert(message))
    .catch((err) => alert(err));
});
