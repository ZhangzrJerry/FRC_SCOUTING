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
    db.collection("userset").doc(event.detail.value.teamname).get({
      success:function(res){
        console.log("success_query")
        if(res.data.password==event.detail.value.password){
          console.log("success_login")
          wx.setStorage({
            key:"teamname",
            data:event.detail.value.teamname
          })
          wx.setStorage({
            key:"password",
            data:event.detail.value.password
          })
          wx.getStorage({
            key:"teamname",
            success(res){
              console.log("getStorage",res)
              getApp().globalData.teamname = res.data
            }
          })
          wx.switchTab({
            url: '../count/count',
          })
        }else{
          console.log("fail_login")
          wx.showToast({
            icon:"error",
            title: '密码错误'
          })
        }
      },
      fail:function(){
        console.log("fail_query")
        wx.showToast({
          icon:"error",
          title: '队号未注册',
        })
      }
    })
    // console.log("callfunction")
    
  
    // var after_trans = new Array(event.detail.value.teamname.length)
    // for(var i=0;i<event.detail.value.teamname.length;i++){
    //   after_trans[i] = this.data.ITOC[event.detail.value.teamname[i]]
    // }
    // var after_after_trans = after_trans.join("")
    // // console.log(after_after_trans)
    // // console.log(this.data[after_after_trans])
    // if(this.data.hasOwnProperty(after_after_trans)){
    //   if(this.data[after_after_trans]==event.detail.value.password){
    //     // wx.redirectTo({url: '../count/count'})
    //   wx.switchTab({
    //     url: '../count/count',
    //   })
    //   }else{
    //     this.setData({
    //       alertpass:true
    //     })
    //   }
    // }else{
    //   this.setData({
    //     alertteam:true
    //   })
    // }
  }
})