// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal, oldVal)  {
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },
  attached: function() {
    let date = new Date()
    console.log(date)
  },
  /**
   * 组件的初始数据
   */
  data: {
    year: 2019,
    month: '七月',
    _index: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
