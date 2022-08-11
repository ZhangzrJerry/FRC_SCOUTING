// pages/login/login.js
Page({
  // to_log:{
  //   window.
  // },
  /**
   * 页面的初始数据
   */
  data: {
    alertteam:false,
    alertpass:false,
    teamname:0,
    password:""
    // "ITOC":{"0":"O","1":"Y","2":"E","3":"X","4":"S","5":"W","6":"L","7":"Q","8":"B","9":"J"},
    // "BBYY":"gdgzez1111",
    // "OOOO":"testonly",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teamname:wx.getStorageSync("teamname"),
      password:wx.getStorageSync('password')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.switchTab({
    //   url: '../count/count',
    // })
    // wx.navigateTo({
    //   url: '../contrast/contrast',
    // })
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

  },
  check_login(event) {
    console.log(event)
    this.setData({
      alertteam:false,
      alertpass:false,
    })
    const db = wx.cloud.database()
    wx.cloud.callFunction({
      name:'LoginCheck',
      data:{
        teamname:event.detail.value.teamname,
        password:event.detail.value.password
      },
      success:function(res){
        console.log(res)
      },
      fail:function(res){
        console.log(11)
      }
    })
  }
})