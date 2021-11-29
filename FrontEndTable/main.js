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

    var codeBlock = '<br></br>'+
    '<table id="table1" class="display" >' +
        '<thead>' +
            '<tr>' +
                '<th>Name1</th>' +
                '<th>Position1</th>' +
                '<th>Office</th>' +
                '<th>Age</th>' +
                '<th>Start date</th>' +
                '<th>Salary</th>' +
            '</tr>' +
        '</thead>' +

        '<tbody>' +
            '<tr>' +
                '<td>Tiger Nixon1</td>' +
                '<td>System Architect</td>' +
                '<td>Edinburgh</td>' +
                '<td>61</td>' +
                '<td>2011/04/25</td>' +
                '<td>$320,800</td>' +
            '</tr>' +
        '</tbody>' +
    '</table>'+

    '<button id="newsearch">New Search</button>';

    $('#newsearch').click(function () {
        document.getElementById("second-table-will-display-here").innerHTML = codeBlock
        $('#table1').DataTable();
    });

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


    // HIDE FUNCTION
    /* Add a click handler for the hide row */
    $('#hide').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).hide();
        //$("tr:not(.row_selected,.temp)").hide(); //This is MAYBE can be Merge
    });

    // SHOW FUNCTION
    $('#show').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).show();
        //$("tr:not(.row_selected,.temp)").show(); // This is MAYBE can be Merge
    });

    // MERGE FUNCTION
    $('#merge').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).show();
        $("tr:not(.row_selected,.temp)").hide();
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