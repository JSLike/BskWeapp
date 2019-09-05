// pages/shop/shop.js

let app = getApp();

Page({
  data: {
    list: []
  },
  //思路：页面显示时重新计算数组，
  //添加减少时重新计算
  onShow() {
    let _this = this;
    app.getStorageMsg("shopdetail", function(r) {
      let x = [];
      let rData = r.data;
      for (let i = 0; i < rData.length; i++) {
        if (x.length < 1) {
          rData[i].listnum = 1;
          x.push(rData[i])
        } else {
          let shopBl = x.every(function(item) {
            if (item.title === rData[i].title) {
              item.listnum += 1
            }
            return item.title !== rData[i].title
          })
          if (shopBl) {
            rData[i].listnum = 1;
            x.push(rData[i])
          }
        }
      }
      _this.setData({
        list: x
      })

    })
  },

  //圆点点击选中事件???
  select(e) {

  },
  reduce(e){
    let _this=this;
    console.log("e",e.target.dataset)
    let eTitle = e.target.dataset.itemTitle;
    app.getStorageMsg("shopdetail", function (r) {
      let dataList=r.data;
      let changeList=dataList.map(function(item,i){
          if (item.title == eTitle){
            dataList.splice(i,1)
          }
        });
      //改变storage内的数组
      wx.setStorage({
        key: 'shopdetail',
        // data: changeList,
        data:dataList
      });
      _this.setData({
        list: changeList
      })
    })
  },
  add(){

  },

  changedStorageList(data){

  }

})