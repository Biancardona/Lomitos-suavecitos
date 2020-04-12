const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCPjEOw0CvHTArF8YQnDBoP1B2qm0lnrc8",
        authDomain: "lomitoteca.firebaseapp.com",
        databaseURL: "https://lomitoteca.firebaseio.com",
        projectId: "lomitoteca",
        storageBucket: "lomitoteca.appspot.com",
        messagingSenderId: "945094995701",
        appId: "1:945094995701:web:53716ae9d394fc5eb51fbc",
        measurementId: "G-ZNMSM80VTM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
export default initFirebase;