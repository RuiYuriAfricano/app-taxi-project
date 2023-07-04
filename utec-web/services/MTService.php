<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../repository/MTRepository.php';
/**
 * Description of MTService
 *
 * @author hp
 */
class MTService {
    //put your code here
    private $MTRepository = NULL;

    public function __construct() {
        $this->MTRepository = new MTRepository();
    }

    
    public function inserirMT($motorista, $taxi) {
        try {

            $res = $this->MTRepository->inserirMT($motorista, $taxi);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
   /*
    public function editarEmpresa($id, $nome) {
        try {
   
            $res = $this->MTRepository->editarEmpresa($id, $nome);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function eliminarEmpresa($id) {
        try {
            $res = $this->MTRepository->eliminarEmpresa($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }*/

    public function viewTabelaMT() {
        try {
            $res = $this->MTRepository->viewTabelaMT();
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
}
