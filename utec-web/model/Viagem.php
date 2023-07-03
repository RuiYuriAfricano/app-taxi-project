<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Viagem
 *
 * @author hp
 */
class Viagem {

    //put your code here

    private $cliente;
    private $motorista;
    private $taxi;
    private $factorFiabilidade;
    private $pontoPartida;
    private $pontoDestino;
    private $classificacaoMotorista;
    private $distanciiaPercorrida;
    private $estado;
    private $data;
    private $custoEstimado;
    private $condicionantes;
    private $tempoReal;
    private $tempoEstimado;
    private $custoFinal;
    
    public function __construct($cliente, $motorista, $taxi, $factorFiabilidade, $pontoPartida, $pontoDestino, $classificacaoMotorista, $distanciiaPercorrida, $estado, $data, $custoEstimado, $condicionantes, $tempoReal, $tempoEstimado, $custoFinal) {
        $this->cliente = $cliente;
        $this->motorista = $motorista;
        $this->taxi = $taxi;
        $this->factorFiabilidade = $factorFiabilidade;
        $this->pontoPartida = $pontoPartida;
        $this->pontoDestino = $pontoDestino;
        $this->classificacaoMotorista = $classificacaoMotorista;
        $this->distanciiaPercorrida = $distanciiaPercorrida;
        $this->estado = $estado;
        $this->data = $data;
        $this->custoEstimado = $custoEstimado;
        $this->condicionantes = $condicionantes;
        $this->tempoReal = $tempoReal;
        $this->tempoEstimado = $tempoEstimado;
        $this->custoFinal = $custoFinal;
    }

    public function getCliente() {
        return $this->cliente;
    }

    public function getMotorista() {
        return $this->motorista;
    }

    public function getTaxi() {
        return $this->taxi;
    }

    public function getFactorFiabilidade() {
        return $this->factorFiabilidade;
    }

    public function getPontoPartida() {
        return $this->pontoPartida;
    }

    public function getPontoDestino() {
        return $this->pontoDestino;
    }

    public function getClassificacaoMotorista() {
        return $this->classificacaoMotorista;
    }

    public function getDistanciiaPercorrida() {
        return $this->distanciiaPercorrida;
    }

    public function getEstado() {
        return $this->estado;
    }

    public function getData() {
        return $this->data;
    }

    public function getCustoEstimado() {
        return $this->custoEstimado;
    }

    public function getCondicionantes() {
        return $this->condicionantes;
    }

    public function getTempoReal() {
        return $this->tempoReal;
    }

    public function getTempoEstimado() {
        return $this->tempoEstimado;
    }

    public function getCustoFinal() {
        return $this->custoFinal;
    }

    public function setCliente($cliente): void {
        $this->cliente = $cliente;
    }

    public function setMotorista($motorista): void {
        $this->motorista = $motorista;
    }

    public function setTaxi($taxi): void {
        $this->taxi = $taxi;
    }

    public function setFactorFiabilidade($factorFiabilidade): void {
        $this->factorFiabilidade = $factorFiabilidade;
    }

    public function setPontoPartida($pontoPartida): void {
        $this->pontoPartida = $pontoPartida;
    }

    public function setPontoDestino($pontoDestino): void {
        $this->pontoDestino = $pontoDestino;
    }

    public function setClassificacaoMotorista($classificacaoMotorista): void {
        $this->classificacaoMotorista = $classificacaoMotorista;
    }

    public function setDistanciiaPercorrida($distanciiaPercorrida): void {
        $this->distanciiaPercorrida = $distanciiaPercorrida;
    }

    public function setEstado($estado): void {
        $this->estado = $estado;
    }

    public function setData($data): void {
        $this->data = $data;
    }

    public function setCustoEstimado($custoEstimado): void {
        $this->custoEstimado = $custoEstimado;
    }

    public function setCondicionantes($condicionantes): void {
        $this->condicionantes = $condicionantes;
    }

    public function setTempoReal($tempoReal): void {
        $this->tempoReal = $tempoReal;
    }

    public function setTempoEstimado($tempoEstimado): void {
        $this->tempoEstimado = $tempoEstimado;
    }

    public function setCustoFinal($custoFinal): void {
        $this->custoFinal = $custoFinal;
    }


}
