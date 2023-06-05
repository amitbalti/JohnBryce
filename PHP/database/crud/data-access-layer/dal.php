<!-- data access layer = dal -->
<?php

    // Create a database connection
    function connect(){
        // connection to mysql server
        $user="root";
        $pass="12345678";
        $server="localhost";
        $schema="youtube";

        $conn = mysqli_connect($server, $user, $pass, $schema);
    
        // Check if the connection is established
        if (mysqli_connect_errno($conn)){
            die("Failed to connect to MySQL server, ERROR: ".mysqli_connect_errno()."\nPlease kill Nadav");
        }

        // Support Hebrew/Arabic/Russian
        mysqli_set_charset($conn, "utf8");

        return $conn;
    }

    // Insert, Update, Delete
    // Getting an SQL statement
    function execute($sql){
        // Connect to database
        $connection = connect(); // will start the whole 'connect' function

        // Execute query
        mysqli_execute($connection, $sql);

        // Get the autoIncrement number
        $id = mysqli_insert_id($connection); // update, delete => 0.

        // Close the connection
        mysqli_close($connection);

        // Return id
        return $id;
    }

    // Select
    function select($sql){
        // Connect to database
        $connection = connect();

        // Get a cursor represented by the query
        $cursor = mysqli_query($connection, $sql); 
        // cursor - like a list which each element point to the next element

        $row = mysqli_fetch_object($cursor); // Take the first row

        while ($row){
            $arr[] = $row; // When the '[]' is empty, next to the variable name, is like pushing it inside automatically.
            $row = mysqli_fetch_object($cursor); // Take the next record, object, row
        }
        
        // Close the connection = cost
        mysqli_close($connection);

        // Return the array containing the data
        return $arr;
    }

?>