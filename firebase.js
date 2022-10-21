const initializeApp = require('firebase/app');
const getAnalytics = require('firebase/analytics');
const getAuth = require('firebase/auth');
const getStorage = require('firebase/storage');
const getFirestore = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDtbd0HkibvMpphVldVX9z_VDYax3xM_gU",
  authDomain: "proyectopoi-e2c95.firebaseapp.com",
  projectId: "proyectopoi-e2c95",
  storageBucket: "proyectopoi-e2c95.appspot.com",
  messagingSenderId: "887963550919",
  appId: "1:887963550919:web:3b4dc31bd701208e932ae2",
  measurementId: "G-Q84KGXZBB3"
};

const app = initializeApp.initializeApp(firebaseConfig);
const analytics = getAnalytics.getAnalytics(app);
const auth = getAuth.getAuth();
const storage = getStorage.getStorage();
const db = getFirestore.getFirestore();

module.exports = app, analytics, auth, storage, db;