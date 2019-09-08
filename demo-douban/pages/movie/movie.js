// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
    var that = this
    console.log(params)
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + params.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a', 
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        wx.hideToast()
        console.log(res.data)
        that.setData({
          movie: res.data
        })
      }
    })
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