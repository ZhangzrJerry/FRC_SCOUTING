// 云函数入口文件
const cloud = require('wx-server-sdk');
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
  const countResult = await db.collection(event.teamname).count()
  const total = countResult.total
  for(let i=0;i<total;i++){
    await db.collection(event.teamname).skip(i).limit(1).get().then(res=>{
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
    "match_type","match_code","team_number","team_role","auto_if_out_line","auto_shoot_lower","auto_shoot_upper","tele_jikuu_times","tele_shoot_lower","tele_shoot_upper","last_climb_stair","othertext","who_record"]
  alldata.push(row)  // 列名导入到数组中
  for(let i in jsonData){
    let newitem = []
    for(let j=0;j<row.length;j++){
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
  var xlsxname=event.teamname+".xlsx"
  await cloud.uploadFile({
    cloudPath: xlsxname,
    fileContent: buffer, //excel二进制文件
  })
  return{
    alldata: alldata
  }
}
