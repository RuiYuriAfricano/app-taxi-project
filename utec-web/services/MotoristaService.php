<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../repository/MotoristaRepository.php';
/**
 * Description of MotoristaService
 *
 * @author hp
 */
class MotoristaService {
    //put your code here
    
         private $motoristaRepository = NULL;

    public function __construct() {
        $this->motoristaRepository = new MotoristaRepository();
    }

    public function getAll() {
        try {

            $res = $this->motoristaRepository->selecionartodos();
            return $res;
        } catch (Exception $e) {
            
        }
    }

    public function get($id) {
        try {
            $res = $this->motoristaRepository->selecionar($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function inserir($email, $morada, $datanasc, $destreza, $codEmpresa) {
        try {

            $res = $this->motoristaRepository->inserirMotorista($email, $morada, $datanasc, $destreza, $codEmpresa);
            return $res ;
        } catch (Exception $e) {
            throw $e;
        }
    }
     public function inserirA($email, $morada, $datanasc, $destreza, $codEmpresa) {
        try {

            $res = $this->motoristaRepository->inserirActor($email, $morada, $datanasc, $destreza, $codEmpresa);
            return $res ;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function editar($email, $morada, $datanasc, $destreza, $codEmpresa) {
        try {
   
            $res = $this->motoristaRepository->editarMotorista($email, $morada, $datanasc, $destreza, $codEmpresa);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
    public function editarA($email, $morada, $datanasc, $destreza, $codEmpresa) {
        try {
   
           $res= $this->motoristaRepository->editarActor($email, $morada, $datanasc, $destreza, $codEmpresa);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function eliminar($email) {
        try {
            $res = $this->motoristaRepository->eliminarMotorista($email);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function viewTabelaMotorista() {
        try {
            $res = $this->motoristaRepository->viewTabelaMotorista();
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
    
    
}
