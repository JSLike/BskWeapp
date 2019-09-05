Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/img/sy/icon1.jpg",
      "selectedIconPath": "/images/img/sy/icon1-at.jpg"
    },
      {
        "pagePath": "/pages/classify/classify",
        "text": "分类",
        "iconPath": "/images/img/sy/icon2.jpg",
        "selectedIconPath": "/images/img/sy/icon2-at.jpg"
      },
      {
        "pagePath": "/pages/shop/shop",
        "text": "购物车",
        "iconPath": "/images/img/sy/icon3.jpg",
        "selectedIconPath": "/images/img/sy/icon3-at.jpg"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "我的",
        "iconPath": "/images/img/sy/icon4.jpg",
        "selectedIconPath": "/images/img/sy/icon4-at.jpg"
      }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})