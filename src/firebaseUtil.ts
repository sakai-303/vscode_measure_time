import * as vscode from 'vscode'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"


export class FireBaseUtil{

    storage: vscode.Memento
    firestore: any
    constructor(_storage: vscode.Memento){
        this.storage = _storage
    }

    public initFirebase(){
        const firebase_config = {
            apiKey: 'AIzaSyAk8QXcTK4ZUe1CvTU9uYvceieuHEu_HSk',
            authDomain: 'vue-firebase-8d9e2.firebaseapp.com"',
            projectId: 'vue-firebase-8d9e2',
            storageBucket: 'vue-firebase-8d9e2.appspot.com',
            messagingSenderId: '411186016432',
            appId: '1:411186016432:web:1d28e2f8094c0188c0cb75'
        }
        initializeApp(firebase_config)
        this.firestore = getFirestore()
    }

    public getUserToken(id: string, pass: string) {
        const auth = getAuth()
        
        signInWithEmailAndPassword(auth, id, pass).then(
            (userCredential) => {
                this.storage.update('userToken', userCredential)
            }
        ).catch(
            () => {
                vscode.window.showWarningMessage("サインインに失敗しました")
            }
        )
    }

    public async setCordingTime(characterId: string, codingTimeAdd: number){
        const uid = this.storage.get('userToken').user.uid
        const docRef = doc(
            this.firestore,
            "users",
            uid,
            "characters",
            characterId
        )
        
        let docSnap = await getDoc(docRef).then()
        let userCharaData = docSnap.data()
        
        if (userCharaData != undefined){
            let codingTime = userCharaData["codingTime"]
            let docData = {"codingTime": codingTime + codingTimeAdd}
            await setDoc(docRef, docData)
            console.log("送信に成功")
        }
    }
}
