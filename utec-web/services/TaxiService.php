<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../repository/TaxiRepository.php';
/**
 * Description of TaxiService
 *
 * @author hp
 */
class TaxiService {
    //put your code here
      private $taxiRepository = NULL;

    public function __construct() {
        $this->taxiRepository = new TaxiRepository();
    }

    public function getAll() {
        try {

            $res = $this->taxiRepository->selecionartodos();
            return $res;
        } catch (Exception $e) {
            
        }
    }

    public function get($id) {
        try {
            $res = $this->taxiRepository->selecionar($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function inserir($tipo, $velocidade, $preco, $codEmpresa) {
        try {

            $res = $this->taxiRepository->inserirTaxi($tipo, $velocidade, $preco, $codEmpresa);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
     public function inserirTipo($tipo) {
        try {

            $res = $this->taxiRepository->inserirTipo($tipo);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function editar($id, $tipo, $velocidade, $preco, $codEmpresa) {
        try {
   
            $res = $this->taxiRepository->editarTaxi($id, $tipo, $velocidade, $preco, $codEmpresa);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function eliminar($id) {
        try {
            $res = $this->taxiRepository->eliminarTaxi($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function viewTabelaTaxi() {
        try {
            $res = $this->taxiRepository->viewTabelaTaxi();
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
    public function viewTabelaTipo() {
        try {
            $res = $this->taxiRepository->viewTabelaTipo();
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
}
