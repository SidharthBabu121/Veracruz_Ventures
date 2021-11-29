$(document).ready(function () {
    $('#table0').DataTable();

    $('#button1').click(function () {
        document.getElementById("second-table-will-display-here").innerHTML = codeBlock
        $('#table1').DataTable();
    });

});