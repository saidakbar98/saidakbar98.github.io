<?php 
    session_start();
    $username = 'admin';
    $password='iutsnap';
    if($_POST["username"]==$username&&$_POST["password"]==$password){
        $_SESSION["username"]=$username;
        header('Location: index.php');
    }
    else {
        echo "Wrong username/password!";
        header('Location: login.html');
    }
?>