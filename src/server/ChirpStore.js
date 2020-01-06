const fs = require("fs");
let chirps = { nextId : 0 };

if( fs.existsSync("chirps.json")) {
    chirps = JSON.parse(fs.readFileSync("chirps.json"));
}

let getChirps = () => {
    return Object.assign({} , chirps);
};

let getChirp = id => {
    return Object.assign({} , chirps[id]);
};

let createChirp = (chirp) => {
    chirps[chirps.nextId++] = chirp;
    writeChirps();
};

let updateChirp = (id , chirp) => {
    chirps[id] = chirp;
    writeChirps();
};

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
};

// do not touch this function
let writeChirps = () => {
    fs.writeFileSync("chirps.json" , JSON.stringify(chirps));
};

module.exports = {
    Chirps : chirps ,
    CreateChirp : createChirp ,
    DeleteChirp : deleteChirp ,
    GetChirps : getChirps ,
    GetChirp : getChirp ,
    UpdateChirp : updateChirp
};