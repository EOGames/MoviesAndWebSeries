
const express = require ("express");
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const app = express();

const url = "mongodb+srv://superadmin:superadmin@cluster0.dlw2gjv.mongodb.net/?retryWrites=true&w=majority"
    var myObj  = [
        {
            name: "bholaa",
            pic : "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Bholaa.jpg",
            info :  "Presenting the official trailer of Bholaa, directed and produced by Ajay Devgn, starring himself, Tabu, Vineet Kumar, Deepak Dobariyal, Gajraj Rao & Sanjay Mishra. The film will release on 30th March 2023 in 3D & IMAX.",
            link: "https://www.youtube.com/embed/K-EMszLvRIQ",
        },
        {
            name: "aquaman",
            pic : "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_FMjpg_UX1000_.jpg",
            info :  "An action-packed adventure that spans the vast, visually breathtaking underwater world of the seven seas, “Aquaman” reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be…a king.",
            link: "https://www.youtube.com/embed/zL2BtTdIuLI",
        },
        {
            name: "gadar 2",
            pic : "https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/29/978ed4a0fdc11ccbfdb43dc62cb4c4086de76.jpg",
            info :  "During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.",
            link: "https://www.youtube.com/embed/NQ0zzpwNgLs",
        },
        {
            name : "assassin",
            pic : "https://upload.wikimedia.org/wikipedia/en/2/23/Assassin%27s_Creed_Mirage_cover.jpeg",
            info :  "Assassin's Creed: Mirage is the newest entry in the Assassin’s Creed franchise. In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice. Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined. The game is being developed by Ubisoft for platforms listed above.",
            link: "https://www.youtube.com/embed/jNZ_3rE1Utk",
        },
    ];


const client = new MongoClient(url);

async function main(){

 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

//Listing databases
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//adding data to database
    async function createMultipleListings(client, newListings,database_name, collection_name)
{
    const result = await client.db(database_name).collection(collection_name).insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);       
}

            //adding data now its (((((((((FUNCTION TO CALL)))))))))))))))
// createMultipleListings(client,myObj,"movies","data");
//---------------------------------------------------------



//reading one data now
async function findOneListingByName(client, nameOfListing,database_name, collection_name) {

    const result = await client.db(database_name).collection(collection_name).findOne(nameOfListing);

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
                        //(((((((((((FUNCTION TO CALL)))))))))))
// name of listing {name: value} it will find that if theirs more then one still it will return one 
//findOneListingByName(client,{},"movies","data");
//------------------------------------------------------------------------------------

async function GetAllListings(client,database_name, collection_name)
{
    const result = await client.db(database_name).find();

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);       
}

GetAllListings(client,"movies","data");

    