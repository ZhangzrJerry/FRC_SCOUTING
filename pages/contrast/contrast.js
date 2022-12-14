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
        team_score:0,
        auto_shoot:0,
        tele_shoot:0,
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
        team_score:0,
        auto_shoot:0,
        tele_shoot:0,
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
      team_score:0,
      auto_shoot:0,
      tele_shoot:0,
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
        // console.log(res.data[0])
        var newjson ={num_marker:e.currentTarget.dataset.number,tele_upper:0,tele_lower:0,auto_upper:0,auto_lower:0,jiku_times:0,last_climb:0,auto_white:0,win_percen:0,team_score:0,auto_shoot:0,tele_shoot:0,}
        var counter = 0
        for(let i in res.data){
          console.log(newjson)
          if(res.data[i][2]==e.detail.value){
            counter+=1
            newjson.tele_upper+=parseInt(res.data[i][9])
            newjson.tele_lower+=parseInt(res.data[i][8])
            newjson.jiku_times+=parseInt(res.data[i][7])
            newjson.win_percen+=res.data[i][11]=="win"?1:0
            newjson.last_climb+=res.data[i][10]
            newjson.auto_upper+=parseInt(res.data[i][6])
            newjson.auto_lower+=parseInt(res.data[i][5])
            newjson.auto_white+=res.data[i][4]
            newjson.auto_shoot+=(parseInt(newjson.auto_upper)+parseInt(newjson.auto_lower))
            newjson.tele_shoot+=(parseInt(newjson.tele_upper)+parseInt(newjson.tele_lower))
            newjson.team_score+=parseInt(newjson.auto_white==1?2:0)
            newjson.team_score+=parseInt(newjson.tele_lower)+parseInt(newjson.tele_upper)*2+parseInt(newjson.auto_lower)*2+parseInt(newjson.auto_upper)*4
            switch(newjson.last_climb){
              case 1:
                newjson.team_score+=parseInt(4)
                break
              case 2:
                newjson.team_score+=parseInt(6)
                break
              case 3:
                newjson.team_score+=parseInt(10)
                break
              case 4:
                newjson.team_score+=parseInt(15)
                break
            }
          }
        }
        newjson.tele_upper=newjson.tele_upper/counter
        newjson.tele_lower=newjson.tele_lower/counter
        newjson.jiku_times=newjson.jiku_times/counter
        newjson.win_percen=newjson.win_percen/counter
        newjson.last_climb=newjson.last_climb/counter
        newjson.auto_upper=newjson.auto_upper/counter
        newjson.auto_lower=newjson.auto_lower/counter
        newjson.auto_white=newjson.auto_white/counter
        newjson.team_score=newjson.team_score/counter
        newjson.auto_shoot=newjson.auto_shoot/counter
        newjson.tele_shoot=newjson.tele_shoot/counter
        console.log(newjson)
        that.setData({
          [`teamdata[${e.currentTarget.dataset.number}]`]:newjson
        })
      }
    })
  },
})