// component/caketab/caketabsub/caketabsub.js
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    submsg:{
      type: Object,
      value: ""
    }
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
    toTest(e) {
      // console.log("e", e.currentTarget.dataset.index)
      let eData = e.currentTarget.dataset.index;
      // console.log("typeof eData",eData)
      wx.navigateTo({
        url:"/pages/test/test?detail="+eData,


      })
      app.data.shopdetail=eData;
    
      // console.log(app)
    }

  }
})
