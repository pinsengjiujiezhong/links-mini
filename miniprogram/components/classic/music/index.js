// components/classic/music/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    audioUrl: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: false,
    statusPaly: 'images/player@play.png',
    statusPause: 'images/player@pause.png',
    angle: 0,
    timer: '',
    audio: ''
  },
  // 组件加载的生命周期
  attached: function() {
    this.data.audio = wx.getBackgroundAudioManager()
  },
  // 组件结束的生命周期
  detached: function() {
    if (this.data.timer) {
      if (this.data.audio){
        this.data.audio.stop()
      }
      clearInterval(this.data.timer)
      this.setData({
        timer: ''
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    musicTap: function() {
      this.setData({
        status: !this.data.status
      })
      if (this.data.status) {
        this.Angle()
        this.data.audio.title = 'text'
        this.data.audio.src = this.properties.audioUrl
        this.data.audio.play()
      } else {
        this.data.audio.stop()
        clearInterval(this.data.timer)
        this.setData({
          timer: ''
        })
      }
    },
    Angle: function() {
      this.data.timer = setInterval(() => {
        this.setData({
          angle: this.data.angle + 2
        })
      }, 50);
    } 
  }
})
