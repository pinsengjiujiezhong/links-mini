// miniprogram/pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
let classic = new ClassicModel
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first: false,
    latest: false
  },
  onLike: function (event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classic.getLatest((res) => {
      console.log(res)
      this.setData({
        classic: res,
        first: res.index === 8,
        latest: res.index === 1
      })
    })
  },
  onNext: function() {
    classic.getNext((res) => {
      this.setData({
        classic: res,
        first: res.index === 8,
        latest: res.index === 1
      })
    }, this.data.classic.index)
  },
  onPrevious: function() {
    classic.getPrevious((res) => {
      this.setData({
        classic: res,
        first: res.index === 8,
        latest: res.index === 1
      })
    }, this.data.classic.index)
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