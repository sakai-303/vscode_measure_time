import { FireBaseUtil } from './firebaseUtil'

export class Vtc {
    private writingLang: string = '';
    private lastTime:number
    private firebaseUtil: FireBaseUtil;

    constructor(firebaseUtil: FireBaseUtil){
        this.lastTime = Date.now()
        this.firebaseUtil = firebaseUtil
    }

    public async run(){
        while (1){
            await this.sleep(10)
            if (this.writingLang != ''){
                //送信メソッド
                let timeAdd = Math.floor((Date.now() - this.lastTime) / 1000)
                this.firebaseUtil.setCordingTime(this.writingLang, timeAdd)
                this.lastTime = Date.now()
            }
        }

    }

    public setLangExtension(fileName: string){
        let javaRegx = new RegExp(".*\.java")
        let kotlinRegx = new RegExp(".*\.kt")

        if (javaRegx.test(fileName)){
            this.setLang("Java")
        }
        else if(kotlinRegx.test(fileName)){
            this.setLang("Kotlin")
        }
        else{
            this.writingLang = ''
        }
    }

    public setLang(lang: string){
        if (this.writingLang != ''){
            this.lastTime = Date.now()
        }
        this.writingLang = lang
    }

    private sleep(sec: number) {
        return new Promise(resolve => setTimeout(resolve, sec*1000))
    }
}
