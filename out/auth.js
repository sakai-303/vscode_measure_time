"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTest = exports.signIn = void 0;
const vscode = require("vscode");
function signIn(fireBaseUtil) {
    inputIdPass().then((idPass) => {
        if (idPass == undefined) {
            return;
        }
        let id = idPass[0];
        let pass = idPass[1];
        fireBaseUtil.getUserToken(id, pass);
        vscode.window.showInformationMessage("サインインに成功しました");
    });
}
exports.signIn = signIn;
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
    let token = storage.get('userToken');
    console.log(token.user);
}
exports.authTest = authTest;
//# sourceMappingURL=auth.js.map