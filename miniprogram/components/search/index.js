import { KeyWordModel } from '../../models/keyword'
const keywordModel = new KeyWordModel
Component({
  /**
   * 组件的属性列表
   */
  attached: function() {
    this.getHistory()
    this.getHot()
  },
  properties: {
    more: {
      type: String,
      observer: 'loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyKeyword: [],
    hotKeywords: [],
    searching: false,
    bookList: [],
    keyword: "",
    noData: false,
    total: 0,
    loading: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore: function() {
        console.log('进入了loadMore')
        const length = this.data.bookList.length
        if (length >= this.data.total || this.data.total == 0) {
            return
        }
        if (this.data.loading) {
            return
        }
        this.data.loading = true
        console.log('准备开始请求loadMore')
        const keyword =  this.data.keyword
        const data = {
            summary: 1,
            q: keyword,
            start: length,
        }

        keywordModel.postSearch(data)
            .then(
                res => {
                    const tempList = this.data.bookList.concat(res.books)
                    this.setData({
                        bookList: tempList,
                        total: res.total
                    })
                    console.log('bookList长度: ', this.data.bookList.length)
                    this.data.loading = false
                }
            )

    },
    onCancel: function (event) {
      this.initialize()
      this.triggerEvent('cancel', {}, {})
    },
    getHistory: function(){
      const historyKeyword = keywordModel.getHistory()
      this.setData({
        historyKeyword: historyKeyword
      })
    },
    getHot: function() {
      keywordModel.getHotKeyword()
          .then(
              res => {
                this.setData({
                  hotKeywords: res.hot
                })
              }
          )
    },
    submitSearch: function(keyword) {
        this.setData({
            searching: true
        })
        keywordModel.setHistory(keyword)
        this.getHistory()
        const data = {
            summary: 1,
            q: keyword,
            start: 0,
        }
        keywordModel.postSearch(data)
            .then(
                res => {
                    console.log('res: ', res)
                    if (!res.total) {
                        this.setData({
                            noData: true
                        })
                    }else{
                        this.setData({
                            noData: false
                        })
                    }
                    this.setData({
                        bookList: res.books,
                        total: res.total
                    })

                    wx.hideLoading()
                }
            )
    },
    onSearch: function (item) {
        wx.showLoading()
        const keyword = item.detail.value.trim()
        if (!keyword) {
        return
        }
        this.submitSearch(keyword)
    },
      quickSearch: function (event) {
        const keyword = event.currentTarget.dataset.keyword
        this.setData({
            keyword: keyword
        })
        this.submitSearch(keyword)
    },
      onClose: function () {
          this.initialize()
          this.setData({
              searching: false,
              keyword: ''
          })
      },
      initialize() {
        this.setData({
          bookList: [],
          total: 0
        })
      }
  }
})
