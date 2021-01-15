import firebase from 'firebase';
import "@firebase/firestore"
//import firebaseConfig from './firebaseConfig';


class Fire {

    constructor(callback) {
        this.init(callback)
    }

    init(callback) {
        // if (!firebase.app.length) {
        //     firebase.initializeApp(firebaseConfig)
        // }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            } else {
                firebase.auth().signInAnonymously().catch(error => { callback(error) })
            }
        })
    }

    get userId() {
        return firebase.auth().currentUser.uid
    }

    getList = (callback) => {
        let ref = firebase.firestore().collection('users').doc(this.userId).collection("lists")

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = []

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() })
            });

            callback(lists)
        })
    }

    detach() {
        this.unsubscribe()
    }
}


export default Fire;