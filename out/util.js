"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vtc = void 0;
class vtc {
    constructor() {
        this.writing_lang = '';
    }
    async run() {
        while (1) {
            await this.sleep(10);
            if (this.writing_lang != '') {
                //送信メソッド
                console.log('10sec message');
            }
        }
    }
    set_lang(lang) {
        this.writing_lang = lang;
    }
    sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec * 1000));
    }
}
exports.vtc = vtc;
//# sourceMappingURL=util.js.map