<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHP.php to edit this template
 */
require_once '../repository/MotoristaRepository.php';

$filterUser = filter_input(INPUT_POST, 'email');
$email = isset($filterUser) ? $filterUser : NULL;
$filterPass = filter_input(INPUT_POST, 'password');
$pass = isset($filterPass) ? $filterPass : NULL;

if (!$email) {
    throw new Exception('Ocorreu um erro.');
}

$users = new MotoristaRepository();
$admins = $users->getAdmin();

$user = 'utec@gmail.com';
$p = '1234567890';


foreach ($admins as $s) {
    
    if ($email == $user) {

        if ($pass == $p) {
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
        
        $_SESSION['erro'] .= $s['email'];
        $_SESSION['erro'] .= " Usuario Invalido";
        header("location:../index.php");
    }
}       
