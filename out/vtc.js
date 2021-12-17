"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vtc = void 0;
class Vtc {
    constructor(firebaseUtil) {
        this.writingLang = '';
        this.lastTime = Date.now();
        this.firebaseUtil = firebaseUtil;
    }
    async run() {
        while (1) {
            await this.sleep(10);
            if (this.writingLang != '') {
                //送信メソッド
                let timeAdd = Math.floor((Date.now() - this.lastTime) / 1000);
                this.firebaseUtil.setCordingTime(this.writingLang, timeAdd);
                this.lastTime = Date.now();
            }
        }
    }
    setLangExtension(fileName) {
        let javaRegx = new RegExp(".*\.java");
        let kotlinRegx = new RegExp(".*\.kt");
        if (javaRegx.test(fileName)) {
            this.setLang("Java");
        }
        else if (kotlinRegx.test(fileName)) {
            this.setLang("Kotlin");
        }
        else {
            this.writingLang = '';
        }
    }
    setLang(lang) {
        if (this.writingLang != '') {
            this.lastTime = Date.now();
        }
        this.writingLang = lang;
    }
    sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec * 1000));
    }
}
exports.Vtc = Vtc;
//# sourceMappingURL=vtc.js.map