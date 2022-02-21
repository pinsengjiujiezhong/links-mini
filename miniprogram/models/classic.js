import { HTTP } from '../util/http'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getPrevious(sCallback, index) {
    this.request({
      url: '/classic/' + index +'/previous',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getNext(sCallback, index) {
    this.request({
      url: '/classic/' + index +'/next',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export { ClassicModel }
