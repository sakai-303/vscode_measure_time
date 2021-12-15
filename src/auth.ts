import * as vscode from 'vscode'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export function auth(gState: vscode.Memento){
    inputIdPass().then(
        (idPass) => {
            if (idPass == undefined){
                return
            }
            let id = idPass[0]
            let pass = idPass[1]
            getFiraBase(id, pass, gState)
        }
    )
}

function getFiraBase(id: string, pass: string, storage: vscode.Memento) {
    initFirebase()
    const auth = getAuth()
    
    signInWithEmailAndPassword(auth, id, pass).then(
        (userCredential) => {
            storage.update('token', userCredential)
            console.log(storage.get('token', ''))
        }
    )
}

function initFirebase(){
    const firebase_config = {
        apiKey: 'AIzaSyAk8QXcTK4ZUe1CvTU9uYvceieuHEu_HSk',
        authDomain: 'vue-firebase-8d9e2.firebaseapp.com"',
        projectId: 'vue-firebase-8d9e2',
        storageBucket: 'vue-firebase-8d9e2.appspot.com',
        messagingSenderId: '411186016432',
        appId: '1:411186016432:web:1d28e2f8094c0188c0cb75'
    }
    initializeApp(firebase_config)
}

async function inputIdPass(): Promise<[id: string, pass: string] | undefined> {
    const idOption = {value: ""}
    const passOption = {value: "", password: true}

    let id = await vscode.window.showInputBox(idOption)
    if (id == undefined || id == ""){
        vscode.window.showInformationMessage("コマンドからもう一度入力")
        return undefined
    }
    
    let pass = await vscode.window.showInputBox(passOption)
    if (pass == undefined || pass == ""){
        vscode.window.showInformationMessage("コマンドからもう一度入力")
        return undefined
    }

    return [id, pass]
}

export function authTest(storage: vscode.Memento){
    let token = storage.get('token')

    console.log(token)
}
