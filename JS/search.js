$(document).ready(function(){
    var lands = randomize();
    var formerLands;
    updateLands(lands);
    
    $('#random').on('click', function(){
        formerLands = lands;
        lands = randomize();
        updateLands(lands);
        return false;
    });

    $('#undo').on('click', function(){
        if (formerLands.length > 0 ){
            updateLands(formerLands);
        }
        return false;
    })
});