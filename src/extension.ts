import * as vscode from 'vscode';
import { Vtc } from './vtc'
import { signIn, authTest } from './auth'
import { FireBaseUtil } from './firebaseUtil';

export function activate(context: vscode.ExtensionContext) {
	let gStorage = context.globalState
	const vtc = new Vtc
	const fireBaseUtil = new FireBaseUtil(gStorage)

	fireBaseUtil.initFirebase()
	//getFirestoreToken(context.globalState)	

	// python
	context.subscriptions.push(
		vscode.commands.registerCommand('vtc.set-lang-python', () => {
			vtc.setLang('python')
			vscode.window.showInformationMessage('set Python');
		})
	)
	// vue
	context.subscriptions.push(
		vscode.commands.registerCommand('vtc.set-lang-vue', () => {
			vtc.setLang('vue')
			vscode.window.showInformationMessage('set Vue')
		})
	)
	// ログイン
	context.subscriptions.push(
		vscode.commands.registerCommand('auth', () => {
			signIn(fireBaseUtil)
		})
	)
	// authテスト
	context.subscriptions.push(
		vscode.commands.registerCommand('authTest', () => {
			authTest(gStorage)
		})
	)
	// setCordingTime
	context.subscriptions.push(
		vscode.commands.registerCommand('setCordingTime', () => {
			fireBaseUtil.setCordingTime("8ketSspB29eQuCDLLHvG", 1)
		})
	)

	vtc.run()
}

export function deactivate() {
}
