<?php

    $a=666;

    switch($a){
        case 1:
            echo "One\n";
            break;
        case 2:
            echo "Two\n";
            break;
        case 3:
            echo "Three\n";
            break;
        default:
            echo "Where is the food?";
    }

    $str ="Noam";

    switch($str){
        case "Matan":
            echo "$str wants Maya";
            break;
        case "Ido":
            echo "$str wants or Hila or Noam or Lior or anything that breath";
            break;
        case "Ido":
            echo "$str wants or Hila or Noam or Lior or anything that breath";
            break;
        default:
            echo "$str wants (still thinking)";
    }

    $grade=85;

    switch($grade){
        case $grade>100:
            echo "No bonus for you today";
            break;
        case $grade=100:
            echo "Matan ?!?!?!";
            break;
        case $grade>94:
            echo "A+";
            break; 
        case $grade>90:
            echo "A";
            break; 
        case $grade>85:
            echo "B+";
            break; 
        default:
            echo "Hello Nadav";
    }

?>