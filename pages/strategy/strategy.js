// js代码

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isClear: false,
    rgb: 'rgb(255,255,0)',
    pick: false
  },
  toClear:function(){
    const ctx = wx.createCanvasContext('my-canvas')
    ctx.clearRect(0, 0, 1500, 1000)
    // console.log("a")
  },
  toPick: function () {
    this.setData({
      pick: true
    })
  },
  pickColor(e) {
    this.setData({
      rgb: e.detail.color
    })
  },
  toMore() {
    wx.navigateToMiniProgram({
      appId: 'wx56ff4f457b23ebd1',
    })
  },
  onLoad() {
    // 获取画布上下文
    this.context = wx.createCanvasContext('my-canvas');  // 参数必须和canvas组件中canvas-id值相同
},
//选择改色时触发（在左侧色盘触摸或者切换右侧色相条）
onChangeColor(e) {
    //返回的信息在e.detail.colorData中
    this.setData({
      colorData: e.detail.colorData
    })
  },

  // 刚开始触摸
  touchStart(e) {
    // 获取触摸点坐标
    this.startX = e.changedTouches[0].x
    this.startY = e.changedTouches[0].y

    // 画笔配置
    this.context.setStrokeStyle(this.data.rgb);  // 颜色 
    this.context.setLineWidth(5);        // 粗细 
    this.context.setLineCap('round');    // 线头形状
    this.context.setLineJoin('round');   // 交叉处形状
  },

  // 开始移动
  touchMove(e) {
    // 移动时坐标
    var moveX = e.changedTouches[0].x
    var moveY = e.changedTouches[0].y

    // 判断是否是橡皮檫
    if (this.data.isClear) {
      // 是
      // 以当前坐标点为中心创建20*20像素的橡皮檫
      let rectOriX = this.startX - 10;
      let rectOriY = this.startY - 10;
      this.context.clearRect(rectOriX, rectOriY, 20, 20);
    } else {
      // 不是
      this.context.moveTo(this.startX, this.startY);  // 找到起点
      this.context.lineTo(moveX, moveY);              // 找到终点
      this.context.stroke();                          // 描绘路径
    }

    // 改变起点坐标
    this.startX = moveX;
    this.startY = moveY;
    this.context.draw(true);  // 画
  },

  // 橡皮檫
  clear() {
    // 每次点击都变成相反的状态
    this.setData({
      isClear: !this.data.isClear
    })
  }
})