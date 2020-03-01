
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBr2NfCHiMCXjxPBb2kbv9_3aRZg67mtX8",
    authDomain: "gamingmedia-61983.firebaseapp.com",
    databaseURL: "https://gamingmedia-61983.firebaseio.com",
    projectId: "gamingmedia-61983",
    storageBucket: "gamingmedia-61983.appspot.com",
    messagingSenderId: "818824358462",
    appId: "1:818824358462:web:5e40b38ca0d8fcc4d23f6f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  

  const cafeList = document.querySelector('#card-list');
  const form = document.querySelector('#add-card-form');
  
  // create element & render cafe
  function renderCard(doc){
      let li = document.createElement('li');
      let name = document.createElement('span');
      let city = document.createElement('span');
  
      li.setAttribute('data-id', doc.id);
      name.textContent = doc.data().name;
      city.textContent = doc.data().city;
  
      li.appendChild(name);
      li.appendChild(city);
  
      cafeList.appendChild(li);
  }
  
  // getting data
  db.collection('card').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
          renderCard(doc);
      });
  });
  
  // saving data
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      db.collection('card').add({
          name: form.name.value,
          city: form.city.value
      });
      form.name.value = '';
      form.city.value = '';
  });