import { HTTP } from '../util/http'

class BookModel extends HTTP {
  getBook(sCallback) {
    this.request({
      url: '/book/hot_list ',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export { BookModel }
