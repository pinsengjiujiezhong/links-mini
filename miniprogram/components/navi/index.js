// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title: String,
      first: Boolean,
      latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftDis: './images/triangle.dis@left.png',
    left: './images/triangle@left.png',
    rightDis: './images/triangle.dis@right.png',
    right: './images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function() {
      if (!this.properties.first) {
        this.triggerEvent('onleft', {}, {})
      }
    },
    onRight: function() {
      if (!this.properties.latest) {
        this.triggerEvent('onright', {}, {})
      }
    }
  }
})
