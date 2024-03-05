$(document).ready(function(){
    updateLands(randomize())
    $('#random').on('click', function(){
        updateLands(randomize())
        return false;
    });
});