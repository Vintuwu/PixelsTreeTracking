$(document).ready(function(){
    var form = $('#form');
    form.on("submit", function(event){
        event.preventDefault();
        event.stopPropagation();
    });

    $('#search').on('click', function(){
        var newSeed = $('#seed').val();

        if (newSeed === 0){
            newSeed = Math.floor((Math.random() * 5000) +1);

            $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + newSeed);
            $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 1));
            $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 2));
            $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 3));

        } else {    
            
            $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + newSeed);
            $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 1));
            $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 2));
            $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + (parseInt(newSeed) + 3));
        }

        return false;
    });

    $('#random').on('click', function(){
        var randomSeed = Math.floor((Math.random() * 5000) + 1);

        $('#iframe1').attr('src', 'https://play.pixels.xyz/pixels/share/' + randomSeed);
        $('#iframe2').attr('src', 'https://play.pixels.xyz/pixels/share/' + (randomSeed + 1));
        $('#iframe3').attr('src', 'https://play.pixels.xyz/pixels/share/' + (randomSeed + 2));
        $('#iframe4').attr('src', 'https://play.pixels.xyz/pixels/share/' + (randomSeed + 3));

        return false;
    });
});
