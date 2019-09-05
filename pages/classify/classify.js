// pages/classify/classify.js
const app = getApp();
const classifyURL = 'https://www.easy-mock.com/mock/5d5f60f35dac523814437cae/classify/classify01';
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    classmsg:false,
    classchange:false,
    btn:true,
    tabnum:0,
    targetId:0,
    

    
  },
  bindNumChange(a){
    this.setData({
      tabnum: a.target.id,
      targetId: 0
    })//点击改变bum值
    if (a.target.id=="0"){
      this.setData({
        classmsg: this.data.classchange.zy
      }) 
    } else if (a.target.id == "1"){
      this.setData({
        classmsg: this.data.classchange.bsjx
      }) 
    }
  
  },



 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    wx.showLoading({
      title: '正在为您加载...',
      mask: true
    })

//获取数据
    app.getData(classifyURL, (data) => {
      this.setData({
        classmsg: data.classify.zy,//页面加载里立即出数据
        classchange: data.classify
      })


      this.setData({
        tabnum: 0,
        targetId: 0
      })//页面显示时重置数据

      setTimeout(function () {
        wx.hideLoading()
      },500)

    })

  },

// 页面隐藏清除定时器
  onHide(e){
    wx.hideLoading()

  }



})