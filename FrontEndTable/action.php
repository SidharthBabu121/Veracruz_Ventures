<?php  
    include 'config.php';
    $output = ' ';

    if(isset($_POST['query'])){
        $search = $_POST['query'];
        $stmt=$conn->prepare("SELECT * FROM live_search WHERE FirstName LIKE CONCAT('%',?,'%') OR LastName LIKE CONCAT('%',?,'%')");
        $stmt->bind_param("vc",$search,$search);
    } else {
        $stmt = $conn->prepare("SELECT * FROM live_search");
    }
    $stmt->execute();
    $result =$stmt->get_result();


    if($result->num_rows>0){
        $output = 
        "<thead>
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
        <tbody>";
        while($row=$result->fetch_assoc()){
            $output .="
            <tr>
                <td>".$row['id']."</td>
                <td>".$row['FistName']."</td>
                <td>".$row['LastName']."</td>
                <td>".$row['Position']."</td>
                <td>".$row['Office']."</td>
                <td>".$row['Age']."</td>
                <td>".$row['StartDate']."</td>
                <td>".$row['Salary']."</td>
            </tr>";
        }
        $output .="<t/body>";
        echo $output;
    } else {
        echo "<h3> No Data Found!</h3>";
    }

?>