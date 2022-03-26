// pages/browse/browse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    // 云数据库导入云端excel
    cdb2excel: function () {
      var teamname="0"
      wx.getStorage({
        key:"teamname",
        success:function(res){
          teamname = toString(res.data)
        }
      })
      wx.cloud.callFunction({
        name: 'CDB2excel',
        data:{
          "teamname":teamname
        },
        success: res => {
          wx.showToast({
            title: '下载成功',
          })
          console.log(res)
          var xlsxurls = 'cloud://test-2022frc-6gat0cgc7b19be48.7465-test-2022frc-6gat0cgc7b19be48-1309958313/'
          var teamname="0"
          wx.getStorage({
            key:"teamname",
            success:function(res){
              teamname = toString(res.data)
            }
          })
          xlsxurls = xlsxurls + teamname + ".xlsx"
          console.log("云存储地址",xlsxurls)
          wx.cloud.downloadFile({
            fileID: xlsxurls,  // 填写云存储中的url
            success: res => {
              console.log("下载成功",res.tempFilePath)
              const xlsxpath = res.tempFilePath
              wx.showModal({
                cancelColor: 'grey',
                content:"是否打开好的Excel",
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
    // openexcel:function(){
    //   var excelpath = ""
    //   wx.getStorage({
    //     key:"xlsx_path",
    //     success:function(res){
    //       console.log("读取缓存地址成功",res.data)
    //       excelpath = res.data
    //     }
    //   })
    //   wx.openDocument({
    //     filePath: excelpath,
    //     success: function (){
    //       console.log('打开文档成功')
    //     },
    //     fail:function(){
    //       console.log("打开文档失败")
    //     }
    //   })
    // }
    
    
})