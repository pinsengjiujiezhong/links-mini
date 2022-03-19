import { HTTP } from '../util/http-p'

class KeyWordModel extends HTTP{
    key = 'q'
    getHistory() {
        return wx.getStorageSync(this.key)
    }
    setHistory(keyword) {
        let words = this.getHistory() || []
        const has = words.includes(keyword)
        if (!has) {
            words.unshift(keyword)
            if (words.length > 8) {
                words = words.slice(0, 8)
            }
            wx.setStorageSync(this.key, words)
        }
    }
    getHotKeyword() {
        return this.request({
            url: '/book/hot_keyword'
        })
    }
    postSearch(data) {
        return this.request({
            url: '/book/search',
            data: data
        })
    }
}


export { KeyWordModel }
