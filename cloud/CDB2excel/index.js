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
  // const wxContext = cloud.getWXContext()
  // 1.从数据库中读取数据
  const countResult = await db.collection(event.teamname).count()
  const total = countResult.total
  const MAX_LIMIT = 20
  // 计算需分几次取
  const batchTimes = Math.ceil(total / MAX_LIMIT)
  // 承载所有读操作的 promise 的数组
  let tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = await db.collection(event.teamname).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  console.log("in cloud",tasks)
  // console.log("1",tasks[1].data.length)
  // for(let i=0;i<total;i++){
  //   await db.collection(event.teamname).skip(i).limit(1).get().then(res=>{
  //     if(i!=0){
  //       jsonData=jsonData.concat(res.data)
  //     }else{
  //       jsonData=res.data
  //     }
  //   })
  // }
  // 2.格式化数据
  let alldata = []
  let row = ["match_type","match_code","team_number","team_role","auto_if_out_line","auto_shoot_lower","auto_shoot_upper","tele_fangui_times","tele_shoot_lower","tele_shoot_upper","last_climb_stair","winorloss","othertext","who_record","_openid","_id"]
  if(event.CDBtype==true){
    alldata.push(row)  // 列名导入到数组中
    for(let i in tasks){
      for(let m in tasks[i].data){
        let newitem = []
        for(let j=0;j<row.length;j++){
          newitem = newitem.concat(tasks[i].data[m][row[j]])
        }
        alldata.push(newitem)
      }
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
  }else{
    for(let i in tasks){
      for(let m in tasks[i].data){
        let newitem = []
        for(let j=0;j<row.length;j++){
          newitem = newitem.concat(tasks[i].data[m][row[j]])
        }
        alldata.push(newitem)
      }
    }
  }
  return{
    alldata:alldata
  }
}
