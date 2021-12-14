import { PassThrough } from 'stream';
import * as vscode from 'vscode'

export class Vtc {
    private writing_lang: string = '';
    // 単位はms
    private start_time:number

    constructor(){
        this.start_time = Date.now()
    }

    public async run(){
        while (1){
            await this.sleep(10)
            if (this.writing_lang != ''){
                //送信メソッド
                let now_time = Date.now()
                console.log(this.writing_lang, Date.now() - this.start_time)
            }
        }

    }

    public set_lang(lang: string): void{
        if (this.writing_lang != ''){
            this.start_time = Date.now()
        }
        this.writing_lang = lang
    }

    private sleep(sec: number) {
        return new Promise(resolve => setTimeout(resolve, sec*1000))
    }
}

export async function auth() {
    let id_option = {value: ""}
    await vscode.window.showInputBox(id_option).then(
        async (value?: string) => {
            if (value == "" || value == undefined){
                return
            }
            let pass_option = {value: "", password: true}
            await vscode.window.showInputBox(pass_option).then()
        }
    )
}

function set_id(value: string){
    // iikanzi
}

function set_pass(value?: string){
    // iikanzi
}
