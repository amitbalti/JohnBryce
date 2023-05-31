<?php

    $person1 = new stdClass;
    $person1->firstName = "Ido and the wifes";
    $person1->wifeName ="Hila";
    $person1->lover1 ="Noam";
    $person1->lover2="Li Orrrr";

    $person2 = new stdClass;
    $person2->firstName= "Matan the king";
    $person2->wifeName="Noam";

    echo "$person1->firstName loves $person1->wifeName and $person1->lover1 and $person1->lover2";
    
    showPerson1($person1)."\n";
    showPerson2($person2)."\n";

    function showPerson1($person){
            echo "First Name: $person->firstName\n"; 
            echo "Wife Name: $person->wifeName\n"; 
    }

    function showPerson2($person){
        foreach($person as $property=>$value){
            echo "Property: $property, Value: $value\n"; 
        }
    }

?>