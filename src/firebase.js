import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3KXL3mQAPryImHg5ApuildHDVh6C0EMI",
    authDomain: "linkedin-clone-f0f27.firebaseapp.com",
    projectId: "linkedin-clone-f0f27",
    storageBucket: "linkedin-clone-f0f27.appspot.com",
    messagingSenderId: "875608504161",
    appId: "1:875608504161:web:c174f3453b26d930633720"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}