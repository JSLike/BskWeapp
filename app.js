//app.js
App({

  globalData: {
    userInfo: null
  },
  getData(url, cb) {
    wx.request({
      url: url,
      success(res) {
        cb(res.data)
      },
      header: {
        "content-type": "application/json"
      }
    })

  },
  data:{
    shopdetail:"",
    shopcardetail: [],
    shopcardetailnum:0
  },

 
 getStorageMsg(name,successfn){
           wx.getStorage({ 
             key: name,
             success: function (r) {
               successfn(r)
             },
             fail(){
               wx.setStorage({ 
                 key: name,
                 data: []
               })
             }
           })  
       }
})