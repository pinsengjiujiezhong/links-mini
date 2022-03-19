import {BookModel} from '../../models/book.js'
let book = new BookModel
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bid: '',
    detail: {},
    comments: [],
    like: {},
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bid: options.bid
    })
    wx.showLoading()
    const bid = this.data.bid
    const detail = book.getBookDetail(bid)
    const comment = book.getBookShortComment(bid)
    const favor = book.getFavor(bid)
    Promise.all([detail, comment, favor])
    .then(
      res => {
        console.log(res)
        this.setData({
          like: res[2],
          detail: res[0],
          comments: res[1].comments
        })
        wx.hideLoading()
      }
    )
  },
  getFavor: function(bid) {
    book.getFavor(bid)
    .then(
      res => {
        console.log('like: ', res)
        this.setData({
          like: res
        })
      }
    )
  },
  getDetail: function(bid) {
    book.getBookDetail(bid)
    .then(
      res => {
        this.setData({
          detail: res
        })
      }
    )
  },
  getShortComment: function(bid) {
    book.getBookShortComment(bid)
    .then(
      res => {
        this.setData({
          comments: res.comments
        })
      }
    )
  },
  submitComment: function(event) {
    console.log('event: ', event)
    if (!event.detail.value) {
      return
    }
    console.log('进来了')
    let data = {
      book_id: this.data.bid,
      content: event.detail.value
    }
    book.postComment(data)
    .then(
      res => {
        console.log('res: ', res)
      }
    )
  },
  changeTip: function () {
    console.log('cancelTip进来了')
    this.setData({
      posting: !this.data.posting
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})