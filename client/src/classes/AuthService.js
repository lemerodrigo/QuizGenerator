class AuthService {

  login(email, password) {
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }
    return fetch('/api/users', data)
      .then(response => response.json())
      .catch((err) => {
        console.log(err);
      }); 
  }
}

module.exports = AuthService;
