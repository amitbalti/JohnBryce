<!-- Not number of "cells", number of keys -->
<?php

    // One way:
    $arr = array("Ido"=>"Hila", "Matan"=>"Maya", "Anton"=>"Adam");
    echo "Who will be marry with Ido?".$arr["Ido"]; // Hila
    echo "About who Matan dream every night?".$arr["Matan"]; // Maya
    echo "When there is something strange, in the neighborhood, who you gonna call?".$arr["Anton"]

    // Second way:
    $arr2 = ["Ido"=>"Hila", "Matan"=>"Maya", "Anton"=>"Adam"];
    echo "Who will be marry with Ido?".$arr2["Ido"]; // Hila
    echo "About who Matan dream every night?".$arr2["Matan"]; // Maya
    echo "When there is something strange, in the neighborhood, who you gonna call?".$arr2["Anton"]
  
    // Third way:
    $arr3["Ido"] = "Hila, the one and only";
    $arr3["Matan"] = "Every breath you take, any move you make, I will be watching you Maya (Matan the stocker)";

?>