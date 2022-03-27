// pages/count/count.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    team_number:"0000",
    team_role:"b1",
    who_record:"",
    match_type:"practice",
    match_code:0,
    auto_shoot_upper:0,
    auto_shoot_lower:0,
    auto_if_out_line:false,
    tele_shoot_upper:0,
    tele_shoot_lower:0,
    tele_jikuu_times:0,
    last_climb_stair:0,
    othertext:"",
    winorloss:"",
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
  tele_jikuu_add:function() {
    var prev = this.data.tele_jikuu_times
    this.setData({
      tele_jikuu_times:prev+1
    })
  },
  tele_jikuu_min:function() {
    var prev = this.data.tele_jikuu_times
    this.setData({
      tele_jikuu_times:prev>0?prev-1:0
    })
  },
  tele_upper_add:function() {
    var prev = this.data.tele_shoot_upper
    this.setData({
      tele_shoot_upper:prev+1
    })
  },
  tele_upper_min:function() {
    var prev = this.data.tele_shoot_upper
    this.setData({
      tele_shoot_upper:prev>0?prev-1:0
    })
  },
  tele_lower_add:function() {
    var prev = this.data.tele_shoot_lower
    this.setData({
      tele_shoot_lower:prev+1
    })
  },
  tele_lower_min:function() {
    var prev = this.data.tele_shoot_lower
    this.setData({
      tele_shoot_lower:prev>0?prev-1:0
    })
  },
  auto_upper_add:function() {
    var prev = this.data.auto_shoot_upper
    this.setData({
      auto_shoot_upper:prev+1
    })
  },
  auto_upper_min:function() {
    var prev = this.data.auto_shoot_upper
    this.setData({
      auto_shoot_upper:prev>0?prev-1:0
    })
  },
  auto_lower_add:function() {
    var prev = this.data.auto_shoot_lower
    this.setData({
      auto_shoot_lower:prev+1
    })
  },
  auto_lower_min:function() {
    var prev = this.data.auto_shoot_lower
    this.setData({
      auto_shoot_lower:prev>0?prev-1:0
    })
  },
  ResetAndReset:function() {
    this.setData({
      auto_shoot_lower:0,
      auto_shoot_upper:0,
      tele_jikuu_times:0,
      tele_shoot_lower:0,
      tele_shoot_upper:0,
    })
  },
  SubmitAndUpload:function(e){
    this.setData({
      team_number:e.detail.value.teamnum,
      team_role:e.detail.value.team_role,
      who_record:e.detail.value.whorecord,
      match_type:e.detail.value.match_type,
      match_code:e.detail.value.match,
      auto_if_out_line:e.detail.value.white_line,
      last_climb_stair:e.detail.value.climb,
      othertext:e.detail.value.othertext,
      winorloss:e.detail.value.winorloss,
    })
    wx.setStorage({
      key:"whichmatch",
      value:this.data.match_code
    })
    console.log(e)
    console.log(this.data)
    // var teamname = "0"
    // wx.getStorage({
    //   key:"teamname",
    //   success:function(res){
    //     const teamname = res.data.toString()
    //     console.log("teamname",teamname)
    //   }
    // })
    // console.log(teamname)
    var teamname = getApp().globalData.teamname
    const db = wx.cloud.database()
    db.collection(teamname).add({
      data:{ 
        team_number:this.data.team_number,
        team_role:this.data.team_role,
        who_record:this.data.who_record,
        match_type:this.data.match_type,
        match_code:this.data.match_code,
        auto_shoot_upper:this.data.auto_shoot_upper,
        auto_shoot_lower:this.data.auto_shoot_lower,
        auto_if_out_line:this.data.auto_if_out_line,
        tele_shoot_upper:this.data.tele_shoot_upper,
        tele_shoot_lower:this.data.tele_shoot_lower,
        tele_jikuu_times:this.data.tele_jikuu_times,
        last_climb_stair:this.data.last_climb_stair,
        othertext:this.data.othertext,
        winorloss:this.data.winorloss,
      }
    })
    var trans = "../upload/upload?"
    var x=["比赛类型","比赛场次","队伍角色","队号","自动阶段白线","自动阶段低球","自动阶段高球","手动阶段航站楼次数","手动阶段低球","手动阶段高球","爬升横档数","概述","记录员","胜负"]
    var y=[this.data.match_type,this.data.match_code,this.data.team_role,this.data.team_number,this.data.auto_if_out_line,this.data.auto_shoot_lower,this.data.auto_shoot_upper,this.data.tele_jikuu_times,this.data.tele_shoot_lower,this.data.tele_shoot_upper,this.data.last_climb_stair,this.data.othertext,this.data.who_record,this.data.winorloss]
    for(var i=0;i<x.length;i=i+1){
      trans=trans+x[i]+"="+y[i]+"&"
    }
    wx.navigateTo({
      url: trans,
    })
  }
})
