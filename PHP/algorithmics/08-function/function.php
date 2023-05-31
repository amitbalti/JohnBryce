<?php

    include "math_functions.php"; // like import

    echo getAvg(10,20,30);

    sayHi();
    showMessage("And I, will always, love youuuuu",1000);
    showMessage("Ido and Hila for ever and ever....");

    function sayHi(){
        echo "Hi\n";
    }

    function showMessage($message,$times=1){
        for ($i=1;$i<$times;$i++){
            echo $message."\n";
        }
    }

?>