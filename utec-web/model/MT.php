<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of MT
 *
 * @author hp
 */
class MT {
    //put your code here
    private $id;
    private $motorista;
    private $taxi;
    
    public function __construct($id, $motorista, $taxi) {
        $this->id = $id;
        $this->motorista = $motorista;
        $this->taxi = $taxi;
    }
    
    public function getId() {
        return $this->id;
    }

    public function getMotorista() {
        return $this->motorista;
    }

    public function getTaxi() {
        return $this->taxi;
    }

    public function setId($id): void {
        $this->id = $id;
    }

    public function setMotorista($motorista): void {
        $this->motorista = $motorista;
    }

    public function setTaxi($taxi): void {
        $this->taxi = $taxi;
    }




    
}
