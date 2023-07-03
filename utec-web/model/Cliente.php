<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Cliente
 *
 * @author hp
 */
class Cliente extends Actor {
    //put your code here
   
    private $x;
    private $y;
  

    public function __construct($x, $y, $email, $password, $endereco, $datanasc) {
        parent::__construct($email, $password, $endereco, $datanasc);
        $this->x = $x;
        $this->y = $y;
    }

    public function getX() {
        return $this->x;
    }

    public function getY() {
        return $this->y;
    }

    public function setX($x): void {
        $this->x = $x;
    }

    public function setY($y): void {
        $this->y = $y;
    }

 


}
