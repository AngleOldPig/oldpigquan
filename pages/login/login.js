// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonenumber: "",
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
    if (that.data.phonenumber == '') {
      wx.showModal({
        title: '来者何人？',
        content: '快把手机号填上',
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
        content: '快把登录密码也填上',
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
      wx.request({
        url: getApp().globalData.server + '/index.php/home/user/signin',
        data: {
          phone: that.data.phonenumber,
          password: that.data.password,
        },

        method: "POST",
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        success(res) {
          //console.log(res.data)
          if (res.data.error_code == 1.1) {
            wx.showModal({
              title: '来者何人？',
              content: '快把手机号填上',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 1.2) {
            wx.showModal({
              title: '乖~ 告诉我密码',
              content: '快把登录密码也填上',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 3) {
            wx.showModal({
              title: '密码错啦！',
              content: '那我就再问一遍',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 2) {
            wx.showModal({
              title: '你到底是谁？？',
              content: '不存在该手机用户，请注册',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code != 0) {
            wx.showModal({
              title: '？？？',
              content: '遇到神秘错误:' + res.data.msg + '，快通知老猪！',
              showCancel: false,
              success(res) {},
            })
          } else if (res.data.error_code == 0) {
            getApp().globalData.user = res.data.data
            //console.log(getApp().globalData.user)
            wx.showModal({
              title: '登录成功',
              content: '慢点按确定，给老猪留点时间帮你清理缓存',
              showCancel: false,
              success(res) {},
              complete: function(res) {
                wx.reLaunch({
                  url: '/pages/square/square'
                })
              }
            })
          }
        }
      })
    }
  },

  phonenumberInput: function(e) {
    this.data.phonenumber = e.detail.value
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