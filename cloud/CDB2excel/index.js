// 云函数入口文件
const cloud = require('wx-server-sdk')
const xlsx = require('node-xlsx');

cloud.init({
  env:"test-2022frc-6gat0cgc7b19be48"
})

const db = cloud.database()
let jsonData = []
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // 1.从数据库中读取数据
  var teamname = "0"
  wx.getStorage({
    key:"teamname",
    success:function(res){
      teamname=toString(res.data)
    }
  })
  const countResult = await db.collection(teamname).count()
  const total = countResult.total
  for(let i=0;i<total;i++){
    await db.collection(teamname).skip(i).limit(1).get().then(res=>{
      if(i!=0){
        jsonData=jsonData.concat(res.data)
      }else{
        jsonData=res.data
      }
    })
  }
  // 2.格式化数据
  let alldata = []
  let row = [
    "team_number","team_role","who_record","match_type","match_code","auto_shoot_upper","auto_shoot_lower","auto_if_out_line","tele_shoot_upper","tele_shoot_lower","tele_jikuu_times","last_climb_stair","othertext"]
  alldata.push(row)  // 列名导入到数组中
  for(let i in jsonData){
    let newitem = []
    for(let j=0;j<2;j++){
      newitem = newitem.concat(jsonData[i][row[j]])
    }
    alldata.push(newitem)
  }
  console.log(alldata)
  // 3.存储为excel
  var buffer = await xlsx.build([{
    name: 'sheet',
    data: alldata
  }])

  await cloud.uploadFile({
    cloudPath: 'cdb2exceltest.xlsx',
    fileContent: buffer, //excel二进制文件
  })
  return{
    alldata: alldata
  }
}
