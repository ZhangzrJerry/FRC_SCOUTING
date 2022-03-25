// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env:"test-2022frc-6gat0cgc7b19be48",
      // env:"test-2022frc",
      traceUser:true,
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    teamname: 0,
  }
})
