// $(document).ready(function () {

    $(function () {
        var projects = [];
        //$(document).ready(function () {
        $.getJSON("http://127.0.0.1:5500/CSVdata.json", function (data) {
          $.each(data.projects, function (i, f) {
            var tblRow = '<tr>' + '<td>' + f.yearSemester + '</td>' + '<td>' + f.class + '</td>' + '<td>' + f.teamNumber + '</td>' + '<td>' + f.teamName + '</td>' + '<td>' + f.projectTitle + '</td>' + '<td>' + f.organization + '</td>' + '<td>' + f.industry + '</td>' + '<td>' + f.abstract + '</td>' + '<td>' + f.studentNames + '</td>' + '</tr>'
            //});
            $(tblRow).appendTo("#example tbody");
          });

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
    /* Add a click handler for the delete row */
    $('#hide').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).hide();
        //$("tr:not(.row_selected,.temp)").hide();
    });

    // SHOW FUNCTION
    $('#show').click(function () {
        var anSelected = fnGetSelected(oTable);
        $(anSelected).show();
        //$("tr:not(.row_selected,.temp)").show();
        
    });

    // MERGE FUNCTION
    $('#merge').click(function () {
        var anSelected = fnGetSelected(oTable);
        //$(anSelected).hide();
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
});

var oTable;

