// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
  },

  signUp: function(e) {
    wx.navigateTo({
      url: '/pages/enroll/enroll',
    })
  },

  signIn: function(e) {
    var that = this
    //检查内容是否填全
    if (that.data.username == '') {
      wx.showModal({
        title: '来者何人？报上名来！',
        content: '快把名字填上',
        showCancel: false,
        success(res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    } else if (that.data.password == '') {
      wx.showModal({
        title: '乖~ 告诉我密码',
        content: '快把登录密码填上',
        showCancel: false,
        success(res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    } else {
      console.log("success")

      wx.redirectTo({
        url: '/pages/square/square',
      })

    }
  },

  usernameInput: function(e) {
    this.data.username = e.detail.value
  },

  passwordInput: function(e) {
    this.data.password = e.detail.value
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