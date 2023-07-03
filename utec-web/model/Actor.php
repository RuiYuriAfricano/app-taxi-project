<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Actor
 *
 * @author hp
 */
abstract class  Actor  {
    //put your code here
    private $email;
    private $password;
    private $endereco;
    private $datanasc;
    
    public function getEmail() {
        return $this->email;
    }

    public function getPassword() {
        return $this->password;
    }

    public function getEndereco() {
        return $this->endereco;
    }

    public function getDatanasc() {
        return $this->datanasc;
    }

    public function setEmail($email): void {
        $this->email = $email;
    }

    public function setPassword($password): void {
        $this->password = $password;
    }

    public function setEndereco($endereco): void {
        $this->endereco = $endereco;
    }

    public function setDatanasc($datanasc): void {
        $this->datanasc = $datanasc;
    }

    public function __construct($email, $password, $endereco, $datanasc) {
        $this->email = $email;
        $this->password = $password;
        $this->endereco = $endereco;
        $this->datanasc = $datanasc;
    }

}
