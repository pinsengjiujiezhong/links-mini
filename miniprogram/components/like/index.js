// miniprogram/components/like/index.js
import { LikeModel } from '../../models/like.js'
let like = new LikeModel
Component({

  //组件属性
  properties: {
    liked: Boolean,
    likeNum: Number
  },

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  methods: {
    onLink: function () {
      let liked = this.data.liked
      let likeNum = this.data.likeNum
      let num = liked ? -1 : 1
      this.setData({
        liked: !liked,
        likeNum: likeNum += num
      })
      let params = {
        url: this.properties.liked ? '/like' : '/like/cancel',
        method: 'POST',
        success: (res) => {
          console.log(res)
        } 
      } 
      like.putLike(params)
    },
  }
})