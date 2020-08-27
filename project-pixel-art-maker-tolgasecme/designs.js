updateColorSelection(); // select color with input element   
makeGrid(); // for table with ea button


function updateColorSelection() { // update color independently from submit button
  // Getting references to the input fields, button, and lists
  let $colorPicker = document.getElementById( "colorPicker" );
  let color = $colorPicker.value;

  $colorPicker.addEventListener( 'change', function () {
    color = $colorPicker.value;
  } );
}

function makeGrid() { // creates table body then generates rows per height columns per width
  // Getting references to the input fields, button, and lists
  let $submitBtn = document.getElementById( "submit-button" );
  let $table = document.getElementById( "pixelCanvas" );
  // When the submit button is clicked, call the handleSubmitClick function
  $submitBtn.addEventListener( "click", makeGrid );

  // When size is submitted by the user, call makeGrid()
  event.preventDefault();
  // Your code goes here!
  $table.firstChild.remove();
  let $body = document.createElement( "tbody" );
  $table.appendChild( $body )


  // Select color input
  // Select size input
  let height = document.getElementById( "inputHeight" ).value;
  let width = document.getElementById( "inputWidth" ).value;


  console.log( 'height :>> ', height );
  console.log( 'width :>> ', width );

  for ( let i = 0; i < height; i++ ) {

    let $row = document.createElement( "tr" );
    $body.appendChild( $row );
    console.log( 'table rows  :>> ', i );
    for ( let i = 0; i < width; i++ ) {
      let $td = document.createElement( "td" );
      $td.innerText = '';
      $row.appendChild( $td );
    }
  }
  $table.addEventListener( 'click', function ( cell ) {
    cell.target.style.backgroundColor = document.getElementById("colorPicker").value;

  } );

}
