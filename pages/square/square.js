// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstcolor: "#000000",
    secondcolor: "#979797",
    showdata: {},
  },

  like: function(e) {
    wx.request({
      url: getApp().globalData.server + '/index.php/home/message/do_like',
      data: {
        user_id: getApp().globalData.user.user_id,
        message_id: getApp().globalData.user.username,
      },

      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        //console.log(res.data)
        if (res.data.error_code != 0) {
          wx.showModal({
            title: '？？？',
            content: '遇到神秘错误: 代号' + res.data.error_code + ': ' + res.data.msg + '，快通知老猪！',
            showCancel: false,
            success(res) { },
          })
        } else if (res.data.error_code == 0) {
          wx.showModal({
            title: '发布成功',
            content: '慢点按确定，给老猪留点时间帮你清理缓存',
            showCancel: false,
            success(res) { },
            complete: function (res) {
              wx.reLaunch({
                url: '/pages/square/square'
              })
            }
          })
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '糟糕',
          content: '服务器傲娇了，请检查网络状态并督促老猪调教服务器',
          showCancel: false,
          success(res) { },
        })
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })
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

    var that = this

    wx.showLoading({
      title: '加载中',
    })

    console.log(that.data.detail)

    //与服务器交互
    wx.request({
      url: getApp().globalData.server + '/index.php/home/message/get_all_messages',
      data: {},

      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        //console.log(res.data)
        if (res.data.error_code != 0) {
          wx.showModal({
            title: '？？？',
            content: '遇到神秘错误: 代号' + res.data.error_code + ': ' + res.data.msg + '，快通知老猪！',
            showCancel: false,
            success(res) {},
          })
        } else if (res.data.error_code == 0) {
          // that.data.showdata = res.data.data不可用
          // 因为赋值前页面就已渲染完成
          // 重新赋值并不会触发刷新页面

          // 应使用微信文档中的api触发刷新加载信息
          that.setData({
            showdata: res.data.data
          })

          console.log(that.data.showdata)
        }
      },
      fail: function(res) {
        wx.showModal({
          title: '糟糕',
          content: '服务器傲娇了，请检查网络状态并督促老猪调教服务器',
          showCancel: false,
          success(res) {},
        })
      },
      complete: function(res) {
        wx.hideLoading()
      }
    })
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