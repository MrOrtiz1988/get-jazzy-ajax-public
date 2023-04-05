$(document).ready(onReady);

function onReady() {
    //fancy ajax gets called upon and it is a function 
    // that takes in an object as a parameter
    $.ajax({
        //type would take in either GET or POST
        type: 'GET',
        //url is directory where response is
        url: '/artist'
        //.then is another function that does stuff
    }).then(function (response) {
        //here we are looping response array
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            //here .append is adding the artist which is now an object to the DOM
            //and its adding a table row with objects data in table cells
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response){
        for (let i = 0; i< response.length; i++) {
            let song = response[i];

            $('#songTableBody').append(`
                <tr>    
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }
    });
    // TODO Add ajax request for /songs and display on DOM
}