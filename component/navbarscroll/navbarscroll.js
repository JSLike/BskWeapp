// component/navbarscroll/navbarscroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cakebox: {
      type: Object,
      value:{
        titlesrc:"../../images/img/sy/syimg4.jpg",
        shoplist: [
          {
            src: "../../images/img/sy/sysimg3.jpg",
            title: "洛可可甜心",
            price: "398",
            weight: "1.8"
          },
          {
            src: "../../images/img/sy/sysimg2.jpg",
            title: "玫瑰女王",
            price: "398",
            weight: "2.2"
          },
          {
            src: "../../images/img/sy/sysimg1.jpg",
            title: "宠爱少女",
            price: "258",
            weight: "1.5"
          },
          {
            src: "../../images/img/sy/flimg4.jpg",
            title: "踏雪寻梅",
            price: "218",
            weight: "1.2"
          },
        ]
      }
     
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

  }
})
