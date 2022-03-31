// contrast/contrast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamlist:2,
    teamdata:[
      { 
        num_marker:0,
        tele_upper:0,
        tele_lower:0,
        auto_upper:0,
        auto_lower:0,
        jiku_times:0,
        last_climb:0,
        auto_white:0,
        win_percen:0,
      },
      {
        num_marker:1,
        tele_upper:0,
        tele_lower:0,
        auto_upper:0,
        auto_lower:0,
        jiku_times:0,
        last_climb:0,
        auto_white:0,
        win_percen:0,
      },
    ]
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

  },
  plus:function(){
    var prevjson = this.data.teamdata
    var newjson = prevjson.concat({
      num_marker:this.data.teamlist,
      tele_upper:0,
      tele_lower:0,
      auto_upper:0,
      auto_lower:0,
      jiku_times:0,
      last_climb:0,
      auto_white:0,
      win_percen:0,
  })
    this.setData({
      teamdata:newjson,
      teamlist:this.data.teamlist+1
    })
  },
  minus:function(){
    var prevjson = this.data.teamdata
    prevjson.pop()
    this.setData({
      teamdata:prevjson,
      teamlist:this.data.teamlist>1?this.data.teamlist-1:0
    })
  },
  get:function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.number)
    const db = wx.cloud.database()
    db.collection(e.detail.value).get({
      
    })
  }
})