  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDi0B7efW11EuU0vSAL5xjCVHFjdU6gDxc",
    authDomain: "fir-form-192c9.firebaseapp.com",
    projectId: "fir-form-192c9",
    storageBucket: "fir-form-192c9.appspot.com",
    messagingSenderId: "783966408323",
    appId: "1:783966408323:web:cf05c0f68f0a12b13e55b6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to the database services
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    
    set(ref(db, 'user/' + document.getElementById("email").value),
    {

        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        PhoneNumber: document.getElementById("phone").value,
        Country: document.getElementById("country").value

    });
      alert("Login Successfull  !!")
  })