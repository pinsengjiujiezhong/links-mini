import {config} from '../config'
let tips = {
  1: '未知错误',
  1005: 'appkey错误',
  3000: '服务错误'
}

class HTTP{
  request (params) {
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      header: {
        'appkey': config.appkey,
        'content-type': 'application/json'
      },
      data: params.data,
      success: (res) => {
        let code = res.statusCode.toString()
        if (code == '200') {
          params.success && params.success(res.data)
        } else {
          err_code = res.data.err_code
          this._show_error(err_code)
        }
      },
      fail: (err) => {
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