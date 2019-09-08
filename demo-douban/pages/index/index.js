//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    movies: [],
    title: '加载中。。。'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        wx.hideToast()
        console.log(res)
        console.log(res.data.title)
        that.setData({
          title:res.data.title,
          movies: res.data.subjects
        })
      }
    })
  },

})
