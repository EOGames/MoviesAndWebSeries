const dbConnect = require("./Mongodb");

async function GetAllData (databaseName,collecionName)
{
    let data = await dbConnect(databaseName,collecionName);
    data = await data.find();
    data = await data.toArray();
    console.log(data);
}
module.exports = GetAllData;

