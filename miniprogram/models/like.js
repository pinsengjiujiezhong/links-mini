import { HTTP } from '../util/http'

class LikeModel extends HTTP {
  putLike(params) {
    this.request({
      url: params.url,
      method: params.method,
      success: (res) => {
        params.success(res)
      }
    })
  }
}

export { LikeModel }
