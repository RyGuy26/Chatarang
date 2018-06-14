import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

const config = {   
        apiKey: "AIzaSyBWuvb4wmsSdojj7bhnO7I6hYbJ3Kio-xU",
        authDomain: "chatarang-e6053.firebaseapp.com",
        databaseURL: "https://chatarang-e6053.firebaseio.com",
        projectId: "chatarang-e6053",
        storageBucket: "chatarang-e6053.appspot.com",
        messagingSenderId: "722023283112"     
}
const app = firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

const db = app.database()

export default Rebase.createClass(db)