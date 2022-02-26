import {config} from '../config'
let tips = {
  1: '未知错误',
  1005: 'appkey错误',
  3000: '服务错误'
}

class HTTP{
  request({url, data={}, method="GET"}) {
    return new Promise((resolve, reject) =>{
      console.log('进来了')
      this._request(url, resolve, reject, data, method)
    })
  }
  _request (url, resolve, reject, data={}, method="GET") {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      header: {
        'appkey': config.appkey,
        'content-type': 'application/json'
      },
      data: data,
      success: (res) => {
        let code = res.statusCode.toString()
        if (code == '200') {
          resolve(res.data)
        } else {
          reject()
          err_code = res.data.err_code
          this._show_error(err_code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error(1)
      }
    })
  }
  _show_error (err_code) {
    if (err_code in tips) {
      err_code = 1
    }
    wx.showToast({
      title: tips[err_code],
      icon: 'none'
    })
  }
}

export { HTTP }