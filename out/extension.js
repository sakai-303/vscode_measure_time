"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const vtc_1 = require("./vtc");
const auth_1 = require("./auth");
const firebaseUtil_1 = require("./firebaseUtil");
function activate(context) {
    let gStorage = context.globalState;
    const vtc = new vtc_1.Vtc;
    const fireBaseUtil = new firebaseUtil_1.FireBaseUtil(gStorage);
    fireBaseUtil.initFirebase();
    //getFirestoreToken(context.globalState)	
    // python
    context.subscriptions.push(vscode.commands.registerCommand('vtc.set-lang-python', () => {
        vtc.setLang('python');
        vscode.window.showInformationMessage('set Python');
    }));
    // vue
    context.subscriptions.push(vscode.commands.registerCommand('vtc.set-lang-vue', () => {
        vtc.setLang('vue');
        vscode.window.showInformationMessage('set Vue');
    }));
    // ログイン
    context.subscriptions.push(vscode.commands.registerCommand('auth', () => {
        (0, auth_1.signIn)(fireBaseUtil);
    }));
    // authテスト
    context.subscriptions.push(vscode.commands.registerCommand('authTest', () => {
        (0, auth_1.authTest)(gStorage);
    }));
    // setCordingTime
    context.subscriptions.push(vscode.commands.registerCommand('setCordingTime', () => {
        fireBaseUtil.setCordingTime("8ketSspB29eQuCDLLHvG", 1);
    }));
    vtc.run();
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map