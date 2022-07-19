'use strict';

//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
import { makeRequest } from './helpers.js';

export default class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    const password = document.getElementById('password');
    const username = document.getElementById('username');

    const b64 = {email: username.value,
        password: password.value  
      };    // Convert to Base64 for Basic Authentication

    try {
      // 1. use the makeRequest function to pass our credentials to the server
      let data = await makeRequest('index.html', 'POST', null, null, b64);
      
      // 2. if we get a successful response...we have a token!  Store it since we will need to send it with every request to the API.
      this.jwtToken = data.accessToken;

      // let's get the user details as well and store them locally in the class
      // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
      this.user = await this.getCurrentUser(username.value);
      // hide the login form.
      document.getElementById('login').classList.add('hidden');
      // clear the password
      password.value = '';
      
      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if(callback) {
        callback(this.jwtToken);
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
      let user = await makeRequest(`index.html?email=${email}`, 'GET', null, this.jwtToken);
      return user;
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  
  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class
