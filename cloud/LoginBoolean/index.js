// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"test-2022frc-6gat0cgc7b19be48"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  console.log(event)
  db.collection("userset").doc(event.teamname).get({
    success:function(res){
      console.log("cloud",res)
      // if(event.password==)
    }
  })
  // db.collection("userset").where({
  //   _id:event.teamname
  // }).get({
  //   success:function(res){
  //     console.log(res)
  //   }
  // })
  console.log("in_query",db.collection("userset"))
  db.collection("userset").get({
    // success:function(res){
    //   console.log("a",res)
    // },
  })
  console.log("after_query")
  return {
    // result:true,
    event,
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
  }
}