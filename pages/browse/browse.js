// pages/browse/browse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    estatus:true,
    qstatus:true,
    zstatus:true,
    // teamname:"0",
    idmarker:"",
    // ifexist:[],
    ifteam:false,
    iscode:false,
    inteam:"",
    incode:"",
    list:{
      0:{
        0:"练习赛",
        1:"00",
        2:"8811",
        3:"b2",
        4:true,
        5:1,
        6:5,
        7:2,
        8:0,
        9:9,
        10:4,
        11:"win",
        12:"othertext",
        13:"张子睿",
        14:"123124215311"
      },
      1:{
        0:"淘汰赛",
        1:"99",
        2:"254",
        3:"r3",
        4:false,
        5:1,
        6:5,
        7:2,
        8:0,
        9:9,
        10:4,
        11:"loss",
        12:"othertext",
        13:"彭越",
        14:"123124215312"
      },
      2:{
        0:"资格赛",
        1:"99",
        2:"6907",
        3:"r1",
        4:false,
        5:1,
        6:5,
        7:2,
        8:0,
        9:9,
        10:4,
        11:"loss",
        12:"othertext",
        13:"北大还行",
        14:"123124215313"
      },
    },
    // storage:{a:{},b:{}},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const db = wx.cloud.database()
    // db.watch()
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
    // let teamname_local=0
    // wx.getStorage({
    //   key:"teamname",
    //   success:function(res){
    //     teamname_local = res.data.toString()
    //   }
    // })
    // console.log("local",teamname_local)
    // this.setData({
    //   "teamname":teamname_local
    // })
    // console.log(this.data)
    this.refresh()
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

  // ResetAndReset:function(){
  // },
  skipcontrast:function(){
    wx.navigateTo({
      url: '../contrast/contrast',
    })
  },
  reset:function(){
    this.setData({
      estatus:true,
      qstatus:true,
      zstatus:true,
      teaminput:"",
      matchcode:"",
    })
    // this.search(true,0)
  },
  echange:function(){
    this.setData({
      estatus:!this.data.estatus
    })
  },
  qchange:function(){
    this.setData({
      qstatus:!this.data.qstatus
    })
  },
  zchange:function(){
    this.setData({
      zstatus:!this.data.zstatus
    })
  },
  // print:function(){
  //   // console.log(this.data.storage)
  //   wx.getStorage({
  //     key:"browse",
  //     success:function(res){
  //       console.log(res.data)
  //     }
  //   })
  // },
  // filter:function(event){
  //   console.log(event)
  //   // console.log(event.detail.value.targetteam)
  //   if((event.detail.value.targetteam!="") && (event.detail.value.matchcode!="")){
  //     this.search(0,event.detail.value.targetteam,event.detail.value.matchcode)
  //     console.log("querytype:0")
  //   }else{if(event.detail.value.targetteam!=""){
  //     this.search(1,event.detail.value.targetteam,0)
  //     console.log("querytype:1")
  //   }else{if(event.detail.value.matchcode!=""){
  //     this.search(2,0,event.detail.value.matchcode)
  //     console.log("querytype:2")
  //   }else{
  //     this.search(3,0,0)
  //     console.log("querytype:3")
  //   }}}
  // },
  


  // //搜索(按钮的逻辑只放在是否显示，不参加搜索)
  // search:function(searchtype,targetteam,match_code){
  //   console.log("正在检索")
  //   const db = wx.cloud.database()
  //   const _ = db.command
  //   var teamname="0"
  //   var formatch="0"
  //   wx.getStorage({
  //     key:"teamname",
  //     success:function(res){
  //       teamname = toString(res.data)
  //     }
  //   })
  //   wx.getStorage({
  //     key:"whichmatch",
  //     success:function(res){
  //       formatch = toString(res.data)
  //     }
  //   })
  //   switch(searchtype){
  //     case 0:
  //       db.collection(teamname).where({
  //         team_number:targetteam,
  //         match_code:match_code
  //       }).get({
  //         success:function(res){
  //           console.log(res)
  //          wx.setStorage({
  //             key:"browse",
  //             data:res.data
  //           })
  //         }
  //       })
  //       break
  //     case 1:
  //       db.collection(teamname).where({
  //         team_number:targetteam
  //       }).get({
  //         success:function(res){
  //           console.log(res)
  //          wx.setStorage({
  //             key:"browse",
  //             data:res.data
  //           })
  //         }
  //       })
  //       break
  //     case 2:
  //       db.collection(teamname).where({
  //         match_code:match_code
  //       }).get({
  //         success:function(res){
  //           console.log(res)
  //          wx.setStorage({
  //             key:"browse",
  //             data:res.data
  //           })
  //         }
  //       })
  //       break
  //     case 3:
  //       db.collection(teamname).where({
  //         match_code:formatch
  //       }).get({
  //         success:function(res){
  //           console.log(res)
  //          wx.setStorage({
  //             key:"browse",
  //             data:res.data
  //           })
  //         }
  //       })
  //       break
  //   }
  //   if(searchtype){
  //   }else{
  //   }
  // },


    // 云数据库导入云端excel
    cdb2excel: function () {
      
      var teamname = getApp().globalData.teamname
      wx.cloud.callFunction({
        name: 'CDB2excel',
        data:{
          "teamname":teamname,
          "CDBtype":true
        },
        success: res => {
          wx.showToast({
            title: '下载成功',
          })
          console.log(res)
          var xlsxurls = 'cloud://test-2022frc-6gat0cgc7b19be48.7465-test-2022frc-6gat0cgc7b19be48-1309958313/'
          xlsxurls = xlsxurls + teamname + ".xlsx"
          console.log("云存储地址",xlsxurls)
          wx.cloud.downloadFile({
            fileID: xlsxurls,  // 填写云存储中的url
            success: res => {
              console.log("下载成功",res.tempFilePath)
              const xlsxpath = res.tempFilePath
              wx.showModal({
                cancelColor: 'grey',
                content:"是否打开下载好的Excel",
                success:function(res){
                  if(res.confirm){
                    wx.openDocument({
                      filePath: xlsxpath,
                      success: function (res){
                        console.log('打开文档成功')
                      },
                      fail: err => {
                        console.log('打开文档失败')
                      }
                    })
                  }
                }
              })
              // wx.setStorage({
              //   key:"xlsx_path",
              //   data:res.tempFilePath,
              //   success:function(){
              //     console.log("文件地址缓存成功")
              //   }
              // })
            }
          })
          
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '下载失败',
          })
          console.error('[云函数] 调用失败：', err)
        }
      })
      // var xlsxurls = 'cloud://test-2022frc-6gat0cgc7b19be48.7465-test-2022frc-6gat0cgc7b19be48-1309958313/'+teamname
      // wx.cloud.downloadFile({
      //   fileID: xlsxurls,  // 填写云存储中的url
      //   success: res => {
      //     wx.openDocument({
      //       filePath: res.tempFilePath ,
      //       success: function (res){
      //         console.log('打开文档成功')
      //       },
      //   fail: err => {
      //    console.log('打开文档失败')
      //   }
      //     })
      //   }
      // })
    },
    autostorage:function(){
      const that = this
      // const alldata = getApp().getcollection()
      // console.log("alldata",alldata)
      // wx.setStorage({
      //   key:"browse",
      //   data:alldata,
      //   success:function(){
      //     wx.getStorage({
      //       key:"browse",
      //       success:function(res){
      //         console.log(res.data)
      //       }
      //     })
      //   }
      // })
      var teamname = getApp().globalData.teamname
      console.log("刷新数据")
        wx.cloud.callFunction({
          name: 'CDB2excel',
          data:{
            "teamname":teamname,
            "CDBtype":false
          },
          success:function(res){
            console.log("刷新成功",res.result.alldata)
            wx.showToast({
              title: '刷新成功',
            })
            wx.setStorage({
              key:"browse",
              data:res.result.alldata,
              success:function(){
                wx.getStorage({
                  key:"browse",
                  success:function(res){
                    console.log("数据缓存成功",res.data)
                    that.setData({
                      list:res.data.reverse(),
                    })
                    // for(let i in res.data){
                    //   var content = res.data[i]
                    //   that.setData({
                    //     list:list.concat(content)
                    //   })
                    // }
                    console.log("页面数据",that.data.list)
                    that.filter()
                  }
                })
              }
            })
          }
      })
    },
    // },
    refresh:function(){
      this.autostorage()
    },
    filter:function(){
      for(let i in this.data.list){
        var temp = true
        // console.log(this.data.ifteam)
        if(this.data.ifteam===true){
          if(this.data.list[i][2]!=this.data.inteam){
          // console.log(this.data.list[i][2])
            temp = false
          }
        }
        if(this.data.ifcode===true){
          if(this.data.list[i][1]!=this.data.incode){
            temp = false
          }
        }
        switch(this.data.list[i][0]){
          case "练习赛":
            if(!this.data.estatus){
              temp = false
            }
            break
          case "资格赛":
            if(!this.data.qstatus){
              temp = false
            }
            break
          case "淘汰赛":
            if(!this.data.zstatus){
              temp = false
            }
        }
        var jsonprev = this.data.list[i]
        jsonprev[15] = temp
        // jsonprev = jsonprev.push(temp)
        console.log("jsonprev",jsonprev)
        // console.log("jsontemp",jsontemp)
        this.setData({
          [`list[${i}]`]:jsonprev
        })
      }
    }
})