// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    phonenumber: "",
    password: "",
    passwordack: "",
  },

  signIn: function(e) {
    wx.navigateBack({
      delta: 1
    })
  },

  signUp: function(e) {
    var that = this
    var checkNumber = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
    //检查四项内容是否填全
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
    } else if (that.data.phonenumber == '') {
      wx.showModal({
        title: '给个手机号呗',
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
    } else if (that.data.phonenumber.length != 11) {
      wx.showModal({
        title: '啧...你这手机号不对呀',
        content: '手机号长度不对，回去重新输入',
        showCancel: false,
        success(res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    } else if (!checkNumber.test(that.data.phonenumber)) {
      wx.showModal({
        title: '啧...你这手机号假的吧',
        content: '手机号写错了，回去输入正确的',
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
    } else if (that.data.passwordack == '') {
      wx.showModal({
        title: '休想偷懒！',
        content: '在确认密码里再输入一遍密码，让我来看看你记住了没',
        showCancel: false,
        success(res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    } else if (that.data.passwordack != that.data.password) {
      wx.showModal({
        title: '？？？',
        content: '两次输入密码不一致，快回去检查',
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
      //console.log(that.data.username)
      wx.request({
        url: getApp().globalData.server + '/index.php/home/user/signup',
        data: {
          username: that.data.username,
          phone: that.data.phonenumber,
          password: that.data.password,
          face_url: getApp().globalData.userInfo.avatarUrl,
          password_again: that.data.passwordack,
        },
        
        method: "POST",
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        success(res) {
          //console.log(res.data)
          if (res.data.error_code == 1.1) {
            wx.showModal({
              title: '来者何人？报上名来！',
              content: '快把名字填上',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 1.2) {
            wx.showModal({
              title: '给个手机号呗',
              content: '快把手机号填上',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 1.3) {
            wx.showModal({
              title: '乖~ 告诉我密码',
              content: '快把登录密码填上',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 1.4) {
            wx.showModal({
              title: '休想偷懒！',
              content: '在确认密码里再输入一遍密码，让我来看看你记住了没',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 2) {
            wx.showModal({
              title: '？？？',
              content: '两次输入密码不一致，快回去检查',
              showCancel: false,
              success(res) {}
            })
          } else if (res.data.error_code == 3) {
            wx.showModal({
              title: '你到底是谁？？',
              content: '手机号已被注册',
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
          } else if (res.data.error_code == 0){
            getApp().globalData.user = res.data.data
            //console.log(getApp().globalData.user)
            wx.showModal({
              title: '注册成功',
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

  usernameInput: function(e) {
    this.data.username = e.detail.value
  },

  phonenumberInput: function(e) {
    this.data.phonenumber = e.detail.value
  },

  passwordInput: function(e) {
    this.data.password = e.detail.value
  },

  passwordCheck: function(e) {
    this.data.passwordack = e.detail.value
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