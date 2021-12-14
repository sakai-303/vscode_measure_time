import * as vscode from 'vscode';
import { Vtc } from './vtc'

export function activate(context: vscode.ExtensionContext) {
	const vtc = new Vtc

	context.subscriptions.push(
		vscode.commands.registerCommand('vtc.set-lang-python', () => {
			vtc.set_lang('python')
			vscode.window.showInformationMessage('set Python');
		})
	)
	context.subscriptions.push(
		vscode.commands.registerCommand('vtc.set-lang-vue', () => {
			vtc.set_lang('vue')
			vscode.window.showInformationMessage('set Vue')
		})
	)

	vtc.run()
}

export function deactivate() {
}
