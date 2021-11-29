/*
$(document).ready(function() {
    var table = $('#table').DataTable();

    $('#table tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
    $('#table').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected to Hide' );
    } );
} );
*/

$(document).ready(function () {

    var oTable;

    /* Add a click handler to the rows - this could be used as a callback */
    $("#example tbody tr").click(function (e) {
        if ($(this).hasClass('row_selected')) {
            $(this).removeClass('row_selected');
        }
        else {
            oTable.$('tr.row_selected') //.removeClass('row_selected');
            $(this).addClass('row_selected');
        }
    });


    /* Add a click handler for the delete row */
    $('#hide').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).hide();
        //$("tr:not(.row_selected,.temp)").hide(); //This is MAYBE can be Merge
    });

    $('#show').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).show();
        //$("tr:not(.row_selected,.temp)").show(); // This is MAYBE can be Merge
    });


    /* Init the table */
    oTable = $('#example').dataTable({
        stateSave: true
    });



    /* Get the rows which are currently selected */
    function fnGetSelected(oTableLocal) {
        return oTableLocal.$('tr.row_selected');
    }


});