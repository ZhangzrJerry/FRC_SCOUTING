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
    const that = this
    wx.getStorage({
      key:"browse",
      success:function(res){
        var newjson ={tele_upper:0,tele_lower:0,auto_upper:0,auto_lower:0,jiku_times:0,last_climb:0,auto_white:0,win_percen:0,}
        var counter = 0
        for(let i in res.data){
          if(res.data[i].team_number==e.detail.value){
            counter+=1
            newjson.tele_upper+=res.data[i].tele_shoot_upper
            newjson.tele_lower+=res.data[i].tele_shoot_lower
            newjson.jiku_times+=res.data[i].tele_jikuu_times
            newjson.win_percen+=res.data[i].winorloss=="win"?1:0
            newjson.last_climb+=res.data[i].last_climb_stair
            newjson.auto_upper+=res.data[i].auto_shoot_upper
            newjson.auto_lower+=res.data[i].auto_shoot_lower
            newjson.auto_white+=res.data[i].auto_if_out_line
          }
        }
        newjson.tele_upper/=counter
        newjson.tele_lower/=counter
        newjson.jiku_times/=counter
        newjson.win_percen/=counter
        newjson.last_climb/=counter
        newjson.auto_upper/=counter
        newjson.auto_lower/=counter
        newjson.auto_white/=counter
        that.setData({
          [`teamdata[${e.currentTarget.dataset.number}]`]:newjson
        })
      }
    })
  }
})