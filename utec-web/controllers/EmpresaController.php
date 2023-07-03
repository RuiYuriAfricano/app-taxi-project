<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../services/EmpresaService.php';
/**
 * Description of EmpresaController
 *
 * @author hp
 */
class EmpresaController {
    //put your code here
    
       private $empresaService = NULL;

    public function __construct() {
        $this->empresaService = new EmpresaService();
    }

    public function redirect($location) {
        header('Location: ' . $location);
    }

    public function requestsHandler() {

        $filterOp = filter_input(INPUT_GET, 'op');
        $op = isset($filterOp) ? $filterOp : NULL;
         $filterId = filter_input(INPUT_GET, 'id');
        $id = isset($filterId) ? $filterId : NULL;
        try {
            if ( $op == 'listar') {
                $this->listarEmpresa();
            } else if (!$op || $op == 'inserir') {
                $this->inserirEmpresa();
            }else if ($op == 'editar') {
                $this->editarEmpresa($id);
            }else if ( $op == 'tabela') {
                $this->verTabela();
            } else if ($op == 'eliminar') {
                $this->eliminarEmpresa();
            } else {
                $this->showError("Page not found", "Page for operation " . $op . " was not found!");
            }
        } catch (Exception $e) {
            // some unknown Exception got through here, use application error page to display it
            $this->showError("Application error", $e->getMessage());
        }
    }
    
     public function inserirEmpresa() {

        $nome = '';
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $nome = isset($_POST['nome']) ? filter_input(INPUT_POST, 'nome') : NULL;
            try {
                $this->empresaService->inserirEmpresa($nome);
                $this->redirect('../view/empresas.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

        include '../view/empresas.php';
    }
    
    
    public function editarEmpresa($id)
    {
        if (isset($_POST['form-submit'])) {  
            $nome = isset($_POST['nomeEmpresa']) ? filter_input(INPUT_POST, 'nomeEmpresa') : NULL;
            try {
                $this->empresaService->editarEmpresa($id, $nome);
                 $this->redirect('../view/empresas.php');
                return;
            } catch (Exception $e) {
            }
        }
    }
    
    public function eliminarEmpresa() {

        $filterId = filter_input(INPUT_GET, 'id');
        $id = isset($filterId) ? $filterId : NULL;

        if (!$id) {
            throw new Exception('Ocorreu um erro.');
        }

        $this->empresaService->eliminarEmpresa($id);
        $this->redirect('../view/empresas.php');
    }
}
