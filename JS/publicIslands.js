$(document).ready(function(){
    //?? 3467 4060
    updateLands(publicRandom());

    $('#random').on('click',function(){
        updateLands(publicRandom());
    })
})