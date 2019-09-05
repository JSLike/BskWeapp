let app = getApp();

Page({
  data: {
    msg: "112233",
    shopnum: "",
    shopblock: ""
  },
  onShow() {
    let _this = this;
    app.getStorageMsg("shopdetail", function(r) {
      _this.setData({
        shopnum: r.data.length
      })
      _this.icondisplay();
    })
    //传递的页面数据
    this.setData({
      msg: app.data.shopdetail
    })
  },
  icondisplay() {
    let scnum = this.data.shopnum;
    if (scnum <= 0) {
      this.setData({
        shopblock: 'none'
      })
    } else {
      this.setData({
        shopblock: 'block'
      })
    }
  },
  setShop() {
    //详细购物车信息
    let _this = this;
    app.getStorageMsg("shopdetail", function(r) {
      wx.setStorage({
        key: 'shopdetail',
        data: r.data.concat(_this.data.msg),
      })
      _this.setData({
        shopnum: r.data.length + 1
      })
      console.log("this.data.shopnum", _this.data.shopnum)
      _this.icondisplay();
    })
  }
})