<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
include_once 'Actor.php';
/**
 * Description of Motorista
 *
 * @author hp
 */
class Motorista extends Actor {
    //put your code here
    
    private $destreza ;
    private $id_empresa;
    
    
    public function __construct($email, $password, $endereco, $datanasc, $destreza, $id_empresa) {
        parent::__construct($email, $password, $endereco, $datanasc);
        $this->destreza = $destreza;
        $this->id_empresa = $id_empresa;
       
    }
    
    public function getDestreza() {
        return $this->destreza;
    }

    public function setDestreza($destreza): void {
        $this->destreza = $destreza;
    }

    public function getId_empresa() {
        return $this->id_empresa;
    }

    public function setId_empresa($id_empresa): void {
        $this->id_empresa = $id_empresa;
    }


    
}
