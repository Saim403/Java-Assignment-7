document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    const isValidUsername = /^[a-zA-Z0-9]{5,}$/.test(username);

    if (isValidUsername) {
      alert('Success! Username is valid.');
    } else {
      alert('Error! Username must be at least 5 characters long and contain only alphanumeric characters.');
    }
  });