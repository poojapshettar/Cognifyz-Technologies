// Task 4: Interactive Button
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "#d1ffd6";
});

// Task 5: API Integration
document.getElementById("loadData").addEventListener("click", function() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      const output = users.map(u => `<p>${u.name} - ${u.email}</p>`).join('');
      document.getElementById('data').innerHTML = output;
    });
});

// Task 6: Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message");

  if (!name || !email) {
    msg.textContent = "All fields are required!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
  }
});
