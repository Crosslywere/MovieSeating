$(document).ready(function () { 

    // Select option change
    $('#movie').change(function () {
        var title = $('option:selected').text();
        var price = $('option:selected').val();
        $('#m-price').text(price);
        $('#m-title').text(title);
    });

    // Print ticket
    $('#print').on('click',function(){



        const ticket_no = $('').text();
        const movie_name = $('#m-title').text();
        const movie_theatre = $('').text();
        const movie_seats = $('').text();

        $('#ticket-no').text("100000");
        $('#movie-name').text(movie_name);
        $('#movie-time').text("8:00pm");
        $('#movie-theatre').text("2");
        $('#movie-seats').text("A2, A10");
        $('#movie-price').text("2000");


        // main thing ti print
        $('#to-print').printThis();
    });

     
});