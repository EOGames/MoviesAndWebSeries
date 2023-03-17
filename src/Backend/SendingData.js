const dbConnect = require("./Mongodb");

myobj = 
[
    
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

const SendDataToServer = async function (databasename, collecionName,objToSend =[])
{
    const db =  await dbConnect(databasename,collecionName);
    const result = db.insertMany(objToSend)
}
module.exports = SendDataToServer;

//insert('movie','data',myobj);