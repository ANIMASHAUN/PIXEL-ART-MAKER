// Select color input
// Select size input

    let height,width,color;

// When size is submitted by the user, call makeGrid()

    $('#sizePicker').submit(function(event){

     event.preventDefault();

     height =$('#inputHeight').val();

     width  =$('#inputWeight').val();

     makeGrid(height,width);


})

function makeGrid(y,z) {
	$('tr').remove();

// Your code goes here!

for (let row = 1; row <= y; row++) {

     $('#pixelCanvas').append('<tr></tr>');

for (let col = 1; col <= z; col++) {

     $('tr').filter(':last').append('<td></td>');



	}


}


// adding color to my grid

     $('td').click(function addcolor() {

         color = $('#colorPicker').val();

         $(this).attr('style','background-color:' + color);

})

}


