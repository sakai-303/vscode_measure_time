import * as vscode from 'vscode'
import { FireBaseUtil } from './firebaseUtil'

export function signIn(fireBaseUtil: FireBaseUtil){
    inputIdPass().then(
        (idPass) => {
            if (idPass == undefined){
                return
            }
            let id = idPass[0]
            let pass = idPass[1]
            fireBaseUtil.getUserToken(id, pass)
            vscode.window.showInformationMessage("サインインに成功しました")
        }
    )
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
