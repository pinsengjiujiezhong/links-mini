import { HTTP } from '../util/http-p'

class BookModel extends HTTP {
  getBook(sCallback) {
    return this.request({
      url: '/book/hot_list'
    })
  }
  getBookDetail(sCallback, bid) {
    console.log(bid)
    console.log(`/book/${bid}/detail`)
    this.request({
      url: `/book/${bid}/detail`,
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getBookShortComment(sCallback, bid) {
    this.request({
      url: `/book/${bid}/short_comment`,
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export { BookModel }
