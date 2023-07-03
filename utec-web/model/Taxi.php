<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Taxi
 *
 * @author hp
 */
class Taxi {

    //put your code here
    private $x;
    private $y;
    private $tipoDeViattura;
    private $vmPorKm;
    private $precoBasePorKm;
    private $filaDeEspera;

    public function __construct($x, $y, $tipoDeViattura, $vmPorKm, $precoBasePorKm, $filaDeEspera) {
        $this->x = $x;
        $this->y = $y;
        $this->tipoDeViattura = $tipoDeViattura;
        $this->vmPorKm = $vmPorKm;
        $this->precoBasePorKm = $precoBasePorKm;
        $this->filaDeEspera = $filaDeEspera;
    }
    
    public function getX() {
        return $this->x;
    }

    public function getY() {
        return $this->y;
    }

    public function getTipoDeViattura() {
        return $this->tipoDeViattura;
    }

    public function getVmPorKm() {
        return $this->vmPorKm;
    }

    public function getPrecoBasePorKm() {
        return $this->precoBasePorKm;
    }

    public function getFilaDeEspera() {
        return $this->filaDeEspera;
    }

    public function setX($x): void {
        $this->x = $x;
    }

    public function setY($y): void {
        $this->y = $y;
    }

    public function setTipoDeViattura($tipoDeViattura): void {
        $this->tipoDeViattura = $tipoDeViattura;
    }

    public function setVmPorKm($vmPorKm): void {
        $this->vmPorKm = $vmPorKm;
    }

    public function setPrecoBasePorKm($precoBasePorKm): void {
        $this->precoBasePorKm = $precoBasePorKm;
    }

    public function setFilaDeEspera($filaDeEspera): void {
        $this->filaDeEspera = $filaDeEspera;
    }



}
