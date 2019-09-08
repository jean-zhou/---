// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      {
        id:"1291561",
        images:{
          small: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg",
          medium: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg",
          large: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg"
        },
        title:"千与千寻",
        original_title:"",
        year:"2001",
        directors:{
          0: {
            name: "宫崎骏",
          }
        },
        rating : {
          average: 9.3
        }
      },
      {
        id: "1291560",
        images: {
          large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.jpg",
          medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.jpg",
          small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.jpg",
        },
        title: "龙猫",
        original_title: "",
        year: "1988",
        directors: {
          0: {
            name: "宫崎骏",
          }
        },
        rating: {
          average: 9.2
        }
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})