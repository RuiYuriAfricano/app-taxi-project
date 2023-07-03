<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../repository/ClienteRepository.php';
/**
 * Description of ClienteService
 *
 * @author hp
 */
class ClienteService {
    //put your code here
    
     private $clienteRepository = NULL;

    public function __construct() {
        $this->clienteRepository = new ClienteRepository();
    }

    public function getAll() {
        try {

            $res = $this->clienteRepository->selecionartodos();
            return $res;
        } catch (Exception $e) {
            
        }
    }

    public function get($id) {
        try {
            $res = $this->clienteRepository->selecionar($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function inserir($nome) {
        try {

            $res = $this->clienteRepository->inserirCliente($nome);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function editar($id, $nome) {
        try {
   
            $res = $this->clienteRepository->editarCliente($id, $nome);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function eliminar($id) {
        try {
            $res = $this->clienteRepository->eliminarCliente($id);
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function viewTabelaEmpresa() {
        try {
            $res = $this->clienteRepository->viewTabelaEmpresa();
            return $res;
        } catch (Exception $e) {
            throw $e;
        }
    }
}
