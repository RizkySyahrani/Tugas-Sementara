document.addEventListener("DOMContentLoaded", () => {
  const endpoint = "http://localhost:3000/books";
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "rizkyfajarsyahrani75@gmail.com",
      password: "hahaahhaaa34",
    }),
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});
