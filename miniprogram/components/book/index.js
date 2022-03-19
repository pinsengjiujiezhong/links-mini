// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object,
    authorShow: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bookToDetail() {
      let bid = this.properties.book.id
      wx.navigateTo({
        url: `/pages/bookDetail/index?bid=${bid}`
      })
    }
  }
})
