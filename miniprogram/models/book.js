import { HTTP } from '../util/http-p'

class BookModel extends HTTP {
  getBook() {
    return this.request({
      url: '/book/hot_list'
    })
  }
  getBookDetail(bid) {
    return this.request({
      url: `/book/${bid}/detail`
    })
  }
  getBookShortComment(bid) {
    return this.request({
      url: `/book/${bid}/short_comment`
    })
  }
  getFavor(bid) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }
  postComment(data) {
    return this.request({
      url: '/book/add/short_comment',
      data: data,
      method: 'POST'
    })
  }
}

export { BookModel }
