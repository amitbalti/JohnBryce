<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam :)</title>
    <style>
    body{
        text-align: center;   
    }
    </style>
</head>
<body>
    <h1>PHP search</h1><hr>
    <label>In your mother in law, what do you want?</label>
    <form method="get" action="">
        <input type="text" name="results" />
        <input type="submit" />
    </form>
    <?php
        // Send to page title for the result 
        echo "<br/>Your search result array:<hr/><br/>";
        $url="https://www.google.co.il/search?q=".str_replace(' ','%20',$_GET['results']);

        // Create instance of curl
        $ch = curl_init(); // curl - will bring all the page to me in it's "pure" state

    // START of body    // Give the url that we want to get
        curl_setopt($ch, CURLOPT_URL,$url);

        // Return result in JSON format
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);

        // Tell the web to send the command
        curl_setopt($ch, CURLOPT_REFERER,'https://www.google.com');  // END of body 

        // Execute the command
        $body=curl_exec($ch);

        // Close the connection
        curl_close($ch);

        // Encode to Hebrew/Russian/Arabic/etc...
        $myResult = utf8_encode($body);

        // Show the result
        echo $myResult;
    ?>
</body>
</html>