//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num:100,
    swipermsg:[
      {
        src:'../../images/img/sy/syimg1.jpg'
      },
      {
        src: '../../images/img/sy/syimg3.jpg'
      }
    ],
    swiperinfo:["严选新鲜优质原料","自由冷链配送","甄选全球好货"],
    sysimgdata:[
      {
        src:"../../images/img/sy/sysimg1.jpg",
        title:"蛋糕"
      },
      {
        src: "../../images/img/sy/sysimg2.jpg",
        title: "西点"
      },
      {
        src: "../../images/img/sy/sysimg3.jpg",
        title: "乳品"
      },
      {
        src: "../../images/img/sy/sysimg4.jpg",
        title: "冰激淋"
      }
    ],//蛋糕西点乳品冰激淋
    text: "                                       贝思客官方声明，近期我系发现有客户通过非正常渠道购买产品巴拉巴拉",
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marquee_margin: 300,
    size: 14,
    interval: 20, // 时间间隔
//特价蛋糕内容
    cakeDiscounts:[
      { imgsrc:"../../images/img/sy/syimg1.jpg",linksrc:""},
      { imgsrc: "../../images/img/sy/syimg2.jpg", linksrc: ""},
      { imgsrc: "../../images/img/sy/syimg3.jpg", linksrc: ""},
      { imgsrc: "../../images/img/sy/syimg4.jpg", linksrc: ""},

    ],
//主体蛋糕内容
    cakeboxmsg: {
      cakebox1: {
        titlesrc: "../../images/img/sy/syimg4.jpg",
        shoplist: [
          {
            src: "../../images/img/sy/sysimg3.jpg",
            title: "洛可可甜心",
            price: "398",
            weight: "1.8磅"
          },
          {
            src: "../../images/img/sy/sysimg2.jpg",
            title: "玫瑰女王",
            price: "398",
            weight: "2.2磅"
          },
          {
            src: "../../images/img/sy/sysimg1.jpg",
            title: "宠爱少女",
            price: "258",
            weight: "1.5磅"
          },
          {
            src: "../../images/img/sy/flimg4.jpg",
            title: "踏雪寻梅",
            price: "218",
            weight: "1.2磅"
          },
        ]
      },
      cakebox2: {
        titlesrc: "../../images/img/sy/syimg7.jpg",
        shoplist: [
          {
            src: "../../images/img/sy/sysimg3.jpg",
            title: "洛可可甜心",
            price: "398",
            weight: "1.8磅"
          },
          {
            src: "../../images/img/sy/sysimg2.jpg",
            title: "玫瑰女王",
            price: "398",
            weight: "2.2磅"
          },
          {
            src: "../../images/img/sy/sysimg1.jpg",
            title: "宠爱少女",
            price: "258",
            weight: "1.5磅"
          },
          {
            src: "../../images/img/sy/flimg4.jpg",
            title: "踏雪寻梅",
            price: "218",
            weight: "1.2磅"
          },
        ]
      },
      cakebox3: {
        titlesrc: "../../images/img/sy/syimg6.jpg",
        shoplist: [
          {
            src: "../../images/img/sy/sysimg3.jpg",
            title: "洛可可甜心",
            price: "398",
            weight: "1.8磅"
          },
          {
            src: "../../images/img/sy/sysimg2.jpg",
            title: "玫瑰女王",
            price: "398",
            weight: "2.2磅"
          },
          {
            src: "../../images/img/sy/sysimg1.jpg",
            title: "宠爱少女",
            price: "258",
            weight: "1.5磅"
          },
          {
            src: "../../images/img/sy/flimg4.jpg",
            title: "踏雪寻梅",
            price: "218",
            weight: "1.2磅"
          },
        ]
      }

    }
  },

  onLoad: function () {
 
  },
  getUserInfo: function(e) {

  },
  onPullDownRefresh(){
    console.log("下拉刷新")
  }
  ,
  onShow: function () {
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    //console.log(length,windowWidth);
    that.setData({
      length: length,
      windowWidth: windowWidth
    });
    that.scrolltxt();// 第一个字消失后立即从右边出现
  },

  scrolltxt: function () {
    var that = this;
    var length = that.data.length;//滚动文字的宽度
    var windowWidth = that.data.windowWidth;//屏幕宽度
    if (length > windowWidth) {
      var interval = setInterval(function () {
        var maxscrollwidth = length + that.data.marquee_margin;//滚动的最大宽度，文字宽度+间距，如果需要一行文字滚完后再显示第二行可以修改marquee_margin值等于windowWidth即可
        var crentleft = that.data.marqueeDistance;
        if (crentleft < maxscrollwidth) {//判断是否滚动到最大宽度
          that.setData({
            marqueeDistance: crentleft + that.data.marqueePace
          })
        }
        else {
          //console.log("替换");
          that.setData({
            marqueeDistance: 0 // 直接重新滚动
          });
          clearInterval(interval);
          that.scrolltxt();
        }
      }, that.data.interval);
    }
    else {
      that.setData({ marquee_margin: "1000" });//只显示一条不滚动右边间距加大，防止重复显示
    }
  }

})
