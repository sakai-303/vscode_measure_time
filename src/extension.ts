import * as vscode from 'vscode';
import { Vtc } from './vtc'
import { signIn } from './auth'
import { FireBaseUtil } from './firebaseUtil';

export function activate(context: vscode.ExtensionContext) {
	let gStorage = context.globalState
	const fireBaseUtil = new FireBaseUtil(gStorage)
	const vtc = new Vtc(fireBaseUtil)

	// tokenが無ければsignInを起動
	if (gStorage.get("userToken") == undefined){
		signIn(fireBaseUtil)
	}

	// Java
	context.subscriptions.push(
		vscode.commands.registerCommand('set-lang:Java', () => {
			vtc.setLang('Java')
			vscode.window.showInformationMessage('set Java');
		})
	)
	// Kotlin
	context.subscriptions.push(
		vscode.commands.registerCommand('set-lang:Kotlin', () => {
			vtc.setLang('Kotlin')
			vscode.window.showInformationMessage('set Kotlin')
		})
	)
	// Flutter
	context.subscriptions.push(
		vscode.commands.registerCommand('set-lang:Flutter', () => {
			vtc.setLang('Flutter')
			vscode.window.showInformationMessage("set Flutter")
		})
	)
	// ログイン
	context.subscriptions.push(
		vscode.commands.registerCommand('auth', () => {
			signIn(fireBaseUtil)
		})
	)

	vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (editor != undefined){
			vtc.setLangExtension(editor.document.fileName)
		}
		else{
			vtc.setLangExtension('')
		}
	})

	vtc.run()
}

export function deactivate() {
}
