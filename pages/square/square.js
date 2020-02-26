// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstcolor: "#000000",
    secondcolor: "#979797",
    list: [{
        face_url: "/images/new.png",
        username: "AOP",
        send_timestamp: "2020-2-26 21:31",
        content: "just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. ",
        total_likes: 32,
      },
      {
        face_url: "/images/like_dark.png",
        username: "AOQ",
        send_timestamp: "2020-2-26 21:33",
        content: "just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. 22222222222",
        total_likes: 11,
      },
      {
        face_url: "/images/like_light.png",
        username: "AOQQ",
        send_timestamp: "2020-2-26 21:34",
        content: "just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. 333333333",
        total_likes: 56,
      },
      {
        face_url: "/images/like_light.png",
        username: "OPP",
        send_timestamp: "2020-2-26 21:36",
        content: "just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. just test my first mp. 444444444444",
        total_likes: 44,
      }
    ]
  },

  first_select: function() {},

  second_select: function() {
    wx.navigateTo({
      url: '../commit/commit',
    })
  },

  third_select: function() {
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})