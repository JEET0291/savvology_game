const assert = require("assert");
const client = require("mongodb").MongoClient;
// const config = require("../config");
let _db;

function initDb(callback) {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }
client.connect("mongodb://localhost:27017/savvologyBank", connected);
function connected(err, db) {
        if (err) {
            return callback(err);
        }
        console.log("DB initialized - connected to: savvologyBank");
        _db = db.db('savvologyBank');
        // _db = db;
        return callback(null, _db);
    }
}


function getDb() {
    assert.ok(_db, "Db has not been initialized. Please called init first.");
    return _db;
}


module.exports = {
    getDb,
    initDb
};