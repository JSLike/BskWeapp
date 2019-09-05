// component/caketab/caketab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: Object,
      value: ""
    },
    tabnum: {
      type: String,
      value: ""
    },
    targetId: {
      type: String,
      value: ""
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    submsg:"",
    targetId: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ccc(e) {
      console.log("com--this",this)
      // console.log("this.data.msg--", this.data.msg)
      // console.log("this.data.tabnum--", this.data.tabnum)
      // console.log("e-->>",e.target.id)

      // console.log("aaaaaa---", this.data.msg[e.target.id])//获取点击的当前下标值的数据
      this.setData({
        targetId: e.target.id
      })
      this.setData({
        submsg: this.data.msg[e.target.id]
      })
      console.log("this----",this)

    }
  }
})