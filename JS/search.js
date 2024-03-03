function updateLands(){
    var collection = randomizer();

    $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + collection[0]);
    $('#copySeed1').on('click', function() {
        navigator.clipboard.writeText(collection[0])
    });
    $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + collection[1]);
    $('#copySeed2').on('click', function() {
        navigator.clipboard.writeText(collection[1])
    });
    $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + collection[2]);
    $('#copySeed3').on('click', function() {
        navigator.clipboard.writeText(collection[2])
    });
    $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + collection[3]);
    $('#copySeed4').on('click', function() {
        navigator.clipboard.writeText(collection[3])
    });
}
$(document).ready(function(){
    updateLands()
    
    $('#search').on('click', function(){
        var newSeed = $('#seed').val();

        if (newSeed === 0){
            newSeed = Math.floor((Math.random() * 5000) +1);

            $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + newSeed);
            $('#copySeed1').on('click', function() {
                navigator.clipboard.writeText(newSeed)
            });
            $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 1));
            $('#copySeed2').on('click', function() {
                navigator.clipboard.writeText(parseInt(newSeed) + 1)
            });
            $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 2));
            $('#copySeed3').on('click', function() {
                navigator.clipboard.writeText(parseInt(newSeed) + 2)
            });
            $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 3));
            $('#copySeed4').on('click', function() {
                navigator.clipboard.writeText(parseInt(newSeed) + 3)
            });

        } else {    
            
            $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + newSeed);
            $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 1));
            $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 2));
            $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 3));
        }

        return false;
    });

    $('#random').on('click', function(){
        updateLands()
        return false;
    });
});