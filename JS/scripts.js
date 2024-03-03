function randomizer(){
    var seed
    var seedCollection = [];
    for (var i = 0; i<4; i++){
        seed = Math.floor((Math.random() * 5000) +1);
        seedCollection.push(seed);
    }
    return seedCollection;
}