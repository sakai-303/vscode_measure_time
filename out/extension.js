"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const vtc_1 = require("./vtc");
const auth_1 = require("./auth");
const firebaseUtil_1 = require("./firebaseUtil");
function activate(context) {
    let gStorage = context.globalState;
    const fireBaseUtil = new firebaseUtil_1.FireBaseUtil(gStorage);
    const vtc = new vtc_1.Vtc(fireBaseUtil);
    // tokenが無ければsignInを起動
    if (gStorage.get("userToken") == undefined) {
        (0, auth_1.signIn)(fireBaseUtil);
    }
    // Java
    context.subscriptions.push(vscode.commands.registerCommand('set-lang:Java', () => {
        vtc.setLang('Java');
        vscode.window.showInformationMessage('set Java');
    }));
    // Kotlin
    context.subscriptions.push(vscode.commands.registerCommand('set-lang:Kotlin', () => {
        vtc.setLang('Kotlin');
        vscode.window.showInformationMessage('set Kotlin');
    }));
    // Flutter
    context.subscriptions.push(vscode.commands.registerCommand('set-lang:Flutter', () => {
        vtc.setLang('Flutter');
        vscode.window.showInformationMessage("set Flutter");
    }));
    // ログイン
    context.subscriptions.push(vscode.commands.registerCommand('auth', () => {
        (0, auth_1.signIn)(fireBaseUtil);
    }));
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor != undefined) {
            vtc.setLangExtension(editor.document.fileName);
        }
        else {
            vtc.setLangExtension('');
        }
    });
    vtc.run();
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map