// component/navigationbar/navigationbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      titletxt:{
        type:String,
        value:""
      }
  },
  options: {
    multipleSlots: true
  },
  /**
   * 组件的初始数据
   */
  data: {
      loading: false,
      color: '#000',
      background: '#fff',
      show: true,
      animated: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toBefore(){
      wx.navigateBack({
        delta:1
      })
    }
  }
})
