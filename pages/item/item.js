// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    ifwin:"",
    by:false,
    be:false,
    bs:false,
    ry:false,
    re:false,
    rs:false,
    ife:false,
    ifq:false,
    ifz:false,
    
    team_number:"0000",
    team_role:"b1",
    who_record:"",
    match_type:"练习赛",
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
    const that = this
    this.setData({
      id:options.id
    })
    const db = wx.cloud.database()
    db.collection(getApp().globalData.teamname).doc(this.data.id).get({
      success:function(res){
        that.setData({
          team_number:res.data.team_number,
          team_role:res.data.team_role,
          who_record:res.data.who_record,
          match_type:res.data.match_type,
          match_code:res.data.match_code,
          auto_shoot_upper:res.data.auto_shoot_upper,
          auto_shoot_lower:res.data.auto_shoot_lower,
          auto_if_out_line:res.data.auto_if_out_line,
          tele_shoot_upper:res.data.tele_shoot_upper,
          tele_shoot_lower:res.data.tele_shoot_lower,
          tele_jikuu_times:res.data.tele_jikuu_times,
          last_climb_stair:res.data.last_climb_stair,
          othertext:res.data.othertext,
          winorloss:res.data.winorloss,
        })
        if(that.data.winorloss){
          that.setData({
            ifwin:true
          })
        }else{
          that.setData({
            ifwin:false
          })
        }
        switch(that.data.team_role){
          case "b1":
            that.setData({by:true})
            break
          case "b2":
            that.setData({be:true})
            break
          case "b3":
            that.setData({bs:true})
            break
          case "r1":
            that.setData({ry:true})
            break
          case "r2":
            that.setData({re:true})
            break
          case "r3":
            that.setData({rs:true})
            break
        }
        switch(that.data.match_type){
          case "练习赛":
            that.setData({ife:true})
            break
          case "资格赛":
            that.setData({ifq:true})
            break
          case "淘汰赛":
            that.setData({ifz:true})
            break
        }
      }
    })
    console.log("数据设置完成",this.data)
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
  deletedata:function(){
    const db = wx.cloud.database()
    db.collection(getApp().globalData.teamname).doc(this.data.id).remove({
      success:function(){
        wx.showToast({
          title: '数据删除完成',
        })
        wx.navigateBack({
          delta: 0,
        })
      },
      complete:function(res){
        console.log(res)
      }
    })
  },
  updatedata:function(e){
    console.log(e)
    const db = wx.cloud.database()
    db.collection(getApp().globalData.teamname).doc(this.data.id).update({
      data:{
        team_number:e.detail.value.team_number,
        team_role:e.detail.value.team_role,
        who_record:e.detail.value.who_record,
        match_type:e.detail.value.match_type,
        match_code:e.detail.value.match_code,
        auto_shoot_upper:e.detail.value.auto_shoot_upper,
        auto_shoot_lower:e.detail.value.auto_shoot_lower,
        auto_if_out_line:e.detail.value.auto_if_out_line,
        tele_shoot_upper:e.detail.value.tele_shoot_upper,
        tele_shoot_lower:e.detail.value.tele_shoot_lower,
        tele_jikuu_times:e.detail.value.tele_jikuu_times,
        last_climb_stair:e.detail.value.last_climb_stair,
        othertext:e.detail.value.othertext,
        winorloss:e.detail.value.winorloss,
      },
      success:function(){
        console.log("数据更新完成")
        wx.showToast({
          title: '数据更新完成',
        })
      }
    })
  },
  turnwin:function(){
    this.setData({
      winorloss:"win",
      ifwin:true
    })
  },
  turnloss:function(){
    this.setData({
      winorloss:"loss",
      ifwin:false
    })
  }
})