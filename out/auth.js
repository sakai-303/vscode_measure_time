"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTest = exports.auth = void 0;
const vscode = require("vscode");
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
function auth(gState) {
    inputIdPass().then((idPass) => {
        if (idPass == undefined) {
            return;
        }
        let id = idPass[0];
        let pass = idPass[1];
        getFiraBase(id, pass, gState);
    });
}
exports.auth = auth;
function getFiraBase(id, pass, storage) {
    initFirebase();
    const auth = (0, auth_1.getAuth)();
    (0, auth_1.signInWithEmailAndPassword)(auth, id, pass).then((userCredential) => {
        storage.update('token', userCredential);
        console.log(storage.get('token', ''));
    });
}
function initFirebase() {
    const firebase_config = {
        apiKey: 'AIzaSyAk8QXcTK4ZUe1CvTU9uYvceieuHEu_HSk',
        authDomain: 'vue-firebase-8d9e2.firebaseapp.com"',
        projectId: 'vue-firebase-8d9e2',
        storageBucket: 'vue-firebase-8d9e2.appspot.com',
        messagingSenderId: '411186016432',
        appId: '1:411186016432:web:1d28e2f8094c0188c0cb75'
    };
    (0, app_1.initializeApp)(firebase_config);
}
async function inputIdPass() {
    const idOption = { value: "" };
    const passOption = { value: "", password: true };
    let id = await vscode.window.showInputBox(idOption);
    if (id == undefined || id == "") {
        vscode.window.showInformationMessage("コマンドからもう一度入力");
        return undefined;
    }
    let pass = await vscode.window.showInputBox(passOption);
    if (pass == undefined || pass == "") {
        vscode.window.showInformationMessage("コマンドからもう一度入力");
        return undefined;
    }
    return [id, pass];
}
function authTest(storage) {
    let token = storage.get('token');
    console.log(token);
}
exports.authTest = authTest;
//# sourceMappingURL=auth.js.map