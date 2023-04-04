<?php

$con = mysqli_connect("localhost", "root", "", "createburguer");
if (mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	die();
	}
else {
    print_r("Deu certo");
}

?>