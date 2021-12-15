"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const vtc_1 = require("./vtc");
const auth_1 = require("./auth");
function activate(context) {
    const vtc = new vtc_1.Vtc;
    context.subscriptions.push(vscode.commands.registerCommand('vtc.set-lang-python', () => {
        vtc.setLang('python');
        vscode.window.showInformationMessage('set Python');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vtc.set-lang-vue', () => {
        vtc.setLang('vue');
        vscode.window.showInformationMessage('set Vue');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('auth', () => {
        (0, auth_1.auth)(context.globalState);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('authTest', () => {
        (0, auth_1.authTest)(context.globalState);
    }));
    vtc.run();
    vscode.window.showInputBox;
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map