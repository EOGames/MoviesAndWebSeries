
//const express = require ("express");
const { MongoClient } = require("mongodb");
// const mongoose = require('mongoose');
//const app = express();

const url = "mongodb+srv://superadmin:superadmin@cluster0.dlw2gjv.mongodb.net/?retryWrites=true&w=majority"
   


const client = new MongoClient(url);

async function dbConnect(databaseName="video",collecionName="data")
{
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection(collecionName);
}
module.exports = dbConnect;
