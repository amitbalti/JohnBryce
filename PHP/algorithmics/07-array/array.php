<?php

    // One way to create array:
    $arr1=array(10,20,30,"hi");
    for ($i=0;$i<count($arr);$i++){
        echo $arr1[$i]." "; // (without ." "): 102030hi => (with ." "): 10 20 30 hi
    }

    echo "<br>";
    echo "First item: $arr1[0] , second item: $arr1[1], last item: $arr1[count($arr)-1]"

    // Second way to create array:
    $arr2=[10,20,30,"hi"];

    // Third way to create array:
    for ($i=0;$i<10;$i++){
        $arr3[$i] = $i*$i;
        echo "$arr3[$i]"; 
    }

    // Fourth way to create array:
    for ($i=1;$i<10;$i++){
        $arr4[] =$i*$i; // adding a new value into the array (like push)
        echo "$arr4[$i]";
    }

?>