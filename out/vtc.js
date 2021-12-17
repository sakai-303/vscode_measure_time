"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vtc = void 0;
class Vtc {
    constructor() {
        this.writingLang = '';
        this.lastSendTime = Date.now();
    }
    async run() {
        while (1) {
            await this.sleep(10);
            if (this.writingLang != '') {
                //送信メソッド
                console.log(this.writingLang, Date.now() - this.lastSendTime);
            }
        }
    }
    setLang(lang) {
        if (this.writingLang != '') {
            this.lastSendTime = Date.now();
        }
        this.writingLang = lang;
    }
    sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec * 1000));
    }
}
exports.Vtc = Vtc;
// function sendTime(character, time){
//     const docRef = doc()
// }
//# sourceMappingURL=vtc.js.map