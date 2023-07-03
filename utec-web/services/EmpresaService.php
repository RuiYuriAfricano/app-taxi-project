<?php
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../repository/EmpresaRepository.php';

/**
 * Description of EmpresaService
 *
 * @author hp
 */
class EmpresaService {

    //put your code here
    private $empresaRepository = NULL;

    public function __construct() {
        $this->empresaRepository = new EmpresaRepository();
    }

    public function getAllEmpresa() {
        try {

            $res = $this->empresaRepository->selecionartodos();
            return $res;
        } catch (Exception $e) {
            
        }
    }

    public function getEmpresa($id) {
        try {
            $res = $this->empresaRepository->selecionar($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function inserirEmpresa($nome) {
        try {

            $res = $this->empresaRepository->inserirEmpresa($nome);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function editarEmpresa($id, $nome) {
        try {
   
            $res = $this->empresaRepository->editarEmpresa($id, $nome);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function eliminarEmpresa($id) {
        try {
            $res = $this->empresaRepository->eliminarEmpresa($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function viewTabelaEmpresa() {
        try {
            $res = $this->empresaRepository->viewTabelaEmpresa();
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

}
