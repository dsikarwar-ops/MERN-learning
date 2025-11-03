import express from 'express'
const app = express();

// read about http method
// Read about MVC pattern


// DB data
const DB_DATA = [
    {
        "id": 1,
        "title": "Iron Man's New Armor",
        "content": "Tony Stark reveals a new suit capable of reaching faster speeds and increasing strength. It’s designed to protect against Thanos' power.",
        "author": "Tony Stark",
        "date": "2025-10-01",
        "tags": ["Iron Man", "Armor", "Tech"]
    },
    {
        "id": 2,
        "title": "Captain America’s Leadership",
        "content": "Steve Rogers is seen leading the Avengers in the latest battle against alien invaders, showcasing his strategic brilliance.",
        "author": "Steve Rogers",
        "date": "2025-10-02",
        "tags": ["Captain America", "Leadership", "Avengers"]
    },
    {
        "id": 3,
        "title": "Black Widow’s New Mission",
        "content": "Natasha Romanoff is on a covert mission to uncover a hidden Hydra base, aiming to prevent global threats.",
        "author": "Natasha Romanoff",
        "date": "2025-10-03",
        "tags": ["Black Widow", "Mission", "Espionage"]
    },
    {
        "id": 4,
        "title": "Hawkeye and the Secret Training Program",
        "content": "Clint Barton begins a secret training program for the next generation of archers, preparing for the future of the Avengers.",
        "author": "Clint Barton",
        "date": "2025-10-04",
        "tags": ["Hawkeye", "Training", "Archery"]
    },
    {
        "id": 5,
        "title": "Thor’s New Hammer",
        "content": "Thor unveils a new weapon forged in the heart of a dying star, providing him with greater power than ever before.",
        "author": "Thor Odinson",
        "date": "2025-10-05",
        "tags": ["Thor", "Hammer", "Asgard"]
    },
    {
        "id": 6,
        "title": "Black Panther’s Return",
        "content": "T'Challa returns to Wakanda after a year-long diplomatic mission, with new technology that could change the course of the world.",
        "author": "T'Challa",
        "date": "2025-10-06",
        "tags": ["Black Panther", "Wakanda", "Diplomacy"]
    },
    {
        "id": 7,
        "title": "The Hulk's New Transformation",
        "content": "Bruce Banner discovers a new transformation ability that allows him to retain his intelligence while in Hulk form.",
        "author": "Bruce Banner",
        "date": "2025-10-07",
        "tags": ["Hulk", "Transformation", "Science"]
    },
    {
        "id": 8,
        "title": "Spider-Man’s New Suit",
        "content": "Peter Parker receives an upgraded suit from Tony Stark, now equipped with stealth mode and an advanced AI system.",
        "author": "Peter Parker",
        "date": "2025-10-08",
        "tags": ["Spider-Man", "Suit", "Technology"]
    },
    {
        "id": 9,
        "title": "Ant-Man’s Quantum Realm Research",
        "content": "Scott Lang continues his research into the Quantum Realm, hoping to find new ways to manipulate time and space.",
        "author": "Scott Lang",
        "date": "2025-10-09",
        "tags": ["Ant-Man", "Quantum Realm", "Research"]
    },
    {
        "id": 10,
        "title": "Doctor Strange and the Multiverse",
        "content": "Doctor Stephen Strange explores new dimensions of the multiverse, discovering dangerous anomalies that could threaten all realities.",
        "author": "Stephen Strange",
        "date": "2025-10-10",
        "tags": ["Doctor Strange", "Multiverse", "Magic"]
    }
];

const LIMIT = 5;


// crete 2 more middleware by yourself - H.W
// in which you are appending the new deatils and check in next middleware
const logParamMiddleware = (req, res, next) => {
    const { params } = req;
    req.additionlInfo = {
        info: 'this is my addition info'
    }
    console.log(params, 'from middleware')
    next();
}

app.get('/avenger/details', (req, res) => {
    res.status(200)
    res.json({
        result: DB_DATA,
        total: DB_DATA.length,
        page: 1,
        limit: LIMIT,
        totalPages: Math.ceil(DB_DATA.length / LIMIT)

    })
});

/**
 * Status Code
 * 200, 201, 204 --->
 * 301, 308, 307, 303 --->
 * 400, 401, 403, 404 --->
 * 500, 503, 504, 501 --->
 */

// params = id
app.get('/avenger/details/:id', logParamMiddleware, (req, res) => {
    const { additionlInfo, params: { id } = {} } = req;
    console.log(additionlInfo, id, 'id')

    const filteredData = DB_DATA.find(doc => {
        return doc.id === +id
    }) || null


    res.status(200)
    res.json({
        result: filteredData ? [filteredData] : []
    })
});

// crud 
/**
 * get - deatils get
 * post - creation
 * put - full doc update
 * patch - single entry
 * delete - deletion
 */

app.listen(5000, () => {
    console.log('server is running on port 5000')
})