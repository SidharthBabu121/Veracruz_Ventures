$(document).ready(function() {
    var table = $('#table').DataTable();

    $('#table tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
    $('#table').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected to Hide' );
    } );
} );