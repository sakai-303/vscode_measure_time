import * as vscode from 'vscode';
import { Vtc } from './vtc'
import { auth, authTest } from './auth'

export function activate(context: vscode.ExtensionContext) {
	const vtc = new Vtc

	context.subscriptions.push(
		vscode.commands.registerCommand('vtc.set-lang-python', () => {
			vtc.setLang('python')
			vscode.window.showInformationMessage('set Python');
		})
	)
	context.subscriptions.push(
		vscode.commands.registerCommand('vtc.set-lang-vue', () => {
			vtc.setLang('vue')
			vscode.window.showInformationMessage('set Vue')
		})
	)
	context.subscriptions.push(
		vscode.commands.registerCommand('auth', () => {
			auth(context.globalState)
		})
	)
	context.subscriptions.push(
		vscode.commands.registerCommand('authTest', () => {
			authTest(context.globalState)
		})
	)

	vtc.run()
	vscode.window.showInputBox
}

export function deactivate() {
}
