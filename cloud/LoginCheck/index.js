// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"test-2022frc-6gat0cgc7b19be48",
  throwOnNotFound:false
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  res = await db.collection("userset").doc(event.teamname).get()
  if(res.data.password==event.password){
    return "success"
  }else{
    return "fail"
  }
  return ""
}