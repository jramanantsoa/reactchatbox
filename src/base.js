import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFG-2-_-fzxwY9epxgpnkPnF5STmi6y7c",
    authDomain: "chatbox-jess.firebaseapp.com",
    databaseURL: "https://chatbox-jess-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
