<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHP.php to edit this template
 */



$filterUser = filter_input(INPUT_POST, 'email');
$email = isset($filterUser) ? $filterUser : NULL;
$filterPass = filter_input(INPUT_POST, 'password');
$pass = isset($filterPass) ? $filterPass : NULL;

if (!$email) {
    throw new Exception('Ocorreu um erro.');
}

$user = 'utec@gmail.com';
$p = '0000';

if ($email == $user) {

    if ($p == $pass) {
        session_start();
        $_SESSION['email'] = $email;
        $_SESSION['pass'] = $p;
        header("location: ../view/empresas.php");
    } else {
        session_start();
        $_SESSION['erro'] = "Senha incorrecta";
        header("location: ../index.php");
    }
} else {
    session_start();
    $_SESSION['erro'] = "Usuario Invalido";
    header("location:../index.php");
}
            
       
