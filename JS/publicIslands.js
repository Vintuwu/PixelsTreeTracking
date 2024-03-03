function publicRandom(array){
    var island
    var publicSeeds = []
    for (var i=0; i<4; i++){
        island = Math.floor((Math.random() * array.length));
        publicSeeds.push(array[island]);
    }
    return publicSeeds
}

function updateLands(someArray){
    var seeds = publicRandom(someArray);

    $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + seeds[0]);
    $('#copySeed1').on('click', function() {
        navigator.clipboard.writeText(seeds[0])
    });
    $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + seeds[1]);
    $('#copySeed2').on('click', function() {
        navigator.clipboard.writeText(seeds[1])
    });
    $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + seeds[2]);
    $('#copySeed3').on('click', function() {
        navigator.clipboard.writeText(seeds[2])
    });
    $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + seeds[3]);
    $('#copySeed4').on('click', function() {
        navigator.clipboard.writeText(seeds[3])
    });
}

$(document).ready(function(){
    var publicIslands = [111,294,331,582,604,691,872,905,970,989,1361,1362,1422,1563,1615,1862,1947,1984,2025,2053,2265,2309,2330,2441,2584,2706,2727,2812,2841,2843,3195,3279,3318,3378,3481,3572,3676,3862,3884,3917,4268,4366,4534,4697,4752,4783,4801,4924,4962,4980]
    //?? 3467
    updateLands(publicIslands);

    $('#random').on('click',function(){
        updateLands(publicIslands);
    })
})