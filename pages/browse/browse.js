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
            title: '调用成功',
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
          xlsxurls = xlsxurls + teamname
          console.log("xlsx-online-url",xlsxurls)
          wx.cloud.downloadFile({
            fileID: xlsxurls,  // 填写云存储中的url
            success: res => {
              wx.openDocument({
                filePath: res.tempFilePath ,
                success: function (res){
                  console.log('打开文档成功')
                }
              })
            },
            fail: err => {
             console.log('打开文档失败')
            }
          })
          
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '调用失败',
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
      //       }
      //     })
      //   },
      //   fail: err => {
      //    console.log('打开文档失败')
      //   }
      // })
    }
    
    
})