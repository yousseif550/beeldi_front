import {} from './firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';

const collections = {
    equipments: "equipments"
}
 
const db = firebase.database();
console.log('DB', db)


// export const read = () => {
//     db.collection(collections.equipments)
//     .get()
//     .then(querySnapshot => {
//         console.log('RES', querySnapshot)
//     })
//     .catch(err => console.log (err))
// }