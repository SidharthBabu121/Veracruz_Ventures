<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta name = "author" content = "Sidharth Babu">
    <meta http-equiv = "X-UA-Compatible" content="IE=edge">
    <meta name = "viewport" content ="width=device-width, inital-scale = 1,
    shrink-to-fit=no">
    <title> Live Search Test Trail</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript for Main Page -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> 

</head>


<body class = "bg-secondary">
    <!-- Used NavBar code from Opensource Bootstrap4 Tutorial as ref, Please edit to design interest Sy from front page -->

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Logo</a>

    <!-- Links -->
    <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">library</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">About</a>

      
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Dropdown link
        </a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Search</a>
            <a class="dropdown-item" href="#">Hide</a>
            <a class="dropdown-item" href="#">Merge</a>
        </div> 
        </li>
    </ul>
    </nav>
     <div class="container-fluid">
         <div class="row justify-content-center"></div>
            <div class="col-md-10 bg-light mt-2 rounded p-4">
                <h1 class = "text-primary p-2"> Live Search Engine</h1>
                <hr>
                <div class="form-inline">  
                    <label for="search" class="font-weight-bold lead text-dark">  Search Record  </label> &nbsp;
                    <input type="text" name = "search" id = "search_test"  class="from-control form-control-lg rounder-0  border-primary" placeholder = "Search...">  
                </div>
                    <hr>
                        <?php
                            include 'config.php';
                            $stmt=$conn->prepare("SELECT * FROM live_search");
                            $stmt->execute();
                            $result=$stmt->get_result();
                        ?>
                        <table class="table table-hover table-light table-striped" id = "table-data">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start Date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php while($row=$result->fetch_assoc()){?>
                                    <tr>
                                        <td><?= $row['id']; ?></td>
                                        <td><?= $row['FistName']; ?></td>
                                        <td><?= $row['LastName']; ?></td>
                                        <td><?= $row['Position']; ?></td>
                                        <td><?= $row['Office']; ?></td>
                                        <td><?= $row['Age']; ?></td>
                                        <td><?= $row['StartDate']; ?></td>
                                        <td><?= $row['Salary']; ?></td>
                                    </tr>
                                    <?php }?>
                            </tbody>
                    </table>
                </div>
            </div>
         </div>
         <script type = "text/javascript">
                $(document).ready(function(){
                    $("#search_test").keyup(function(){
                        var search = $(this).val();
                        $.ajax({
                           url:'action.php;',
                           method: 'post',
                           data: {query:search},
                           success:function(response){
                               $("#table-data").html(response);
                           }
                        });
                    });
                });
        </script>
    </body>
</html>