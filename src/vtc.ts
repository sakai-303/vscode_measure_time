export class Vtc {
    private writingLang: string = '';
    // 単位はms
    private lastSendTime:number

    constructor(){
        this.lastSendTime = Date.now()
    }

    public async run(){
        while (1){
            await this.sleep(10)
            if (this.writingLang != ''){
                //送信メソッド
                console.log(this.writingLang, Date.now() - this.lastSendTime)
            }
        }

    }

    public setLang(lang: string){
        if (this.writingLang != ''){
            this.lastSendTime = Date.now()
        }
        this.writingLang = lang
    }

    private sleep(sec: number) {
        return new Promise(resolve => setTimeout(resolve, sec*1000))
    }
}
