<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../services/MotoristaService.php';
/**
 * Description of MotoristaController
 *
 * @author hp
 */
class MotoristaController {
    //put your code here
       private $motoristaService = NULL;

    public function __construct() {
        $this->motoristaService = new MotoristaService();
    }

    public function redirect($location) {
        header('Location: ' . $location);
    }

    public function requestsHandler() {

        $filterOp = filter_input(INPUT_GET, 'op');
        $op = isset($filterOp) ? $filterOp : NULL;
         $filterId = filter_input(INPUT_GET, 'email');
        $email = isset($filterId) ? $filterId : NULL;
        try {
            if ( $op == 'listar') {
                $this->listarTaxi();
            } else if (!$op || $op == 'inserir') {
                $this->inserirMotorista();
            }else if ($op == 'editar') {
                $this->editarMotorista($email);
            }else if ( $op == 'tabela') {
                $this->verTabela();
            } else if ($op == 'eliminar') {
                $this->eliminarMotorista();
            } else {
                $this->showError("Page not found", "Page for operation " . $op . " was not found!");
            }
        } catch (Exception $e) {
            // some unknown Exception got through here, use application error page to display it
            $this->showError("Application error", $e->getMessage());
        }
    }
    
     public function inserirMotorista() {

        $email= '';
        $morada='';
        $datanasc='';
        $destreza='';
        $codEmpresa='';
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $email = isset($_POST['email']) ? filter_input(INPUT_POST, 'email') : NULL;
            $morada = isset($_POST['morada']) ? filter_input(INPUT_POST, 'morada') : NULL;
            $datanasc = isset($_POST['datanasc']) ? filter_input(INPUT_POST, 'datanasc') : NULL;
            $destreza = isset($_POST['destreza']) ? filter_input(INPUT_POST, 'destreza') : NULL;
            $codEmpresa = isset($_POST['id_empresa']) ? filter_input(INPUT_POST, 'id_empresa') : NULL;
            try {
                $this->motoristaService->inserirA($email, $morada, $datanasc, $destreza, $codEmpresa);
                $this->motoristaService->inserir($email, $morada, $datanasc, $destreza, $codEmpresa);
                $this->redirect('../view/motoristas.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

       // include '../view/taxis.php';
    }
    
    
    public function editarMotorista($email)
    {
        $email= '';
        $morada='';
        $datanasc='';
        $destreza='';
        $codEmpresa='';
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $morada = isset($_POST['morada']) ? filter_input(INPUT_POST, 'morada') : NULL;
            $datanasc = isset($_POST['datanasc']) ? filter_input(INPUT_POST, 'datanasc') : NULL;
            $destreza = isset($_POST['destreza']) ? filter_input(INPUT_POST, 'destreza') : NULL;
            $codEmpresa = isset($_POST['id_empresa']) ? filter_input(INPUT_POST, 'id_empresa') : NULL;
            try {
                $this->motoristaService->editarA($email, $morada, $datanasc, $destreza, $codEmpresa);
                $this->motoristaService->editar($email, $morada, $datanasc, $destreza, $codEmpresa);
                $this->redirect('../view/motoristas.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

       // include '../view/taxis.php';
    }
    
    public function eliminarMotorista() {

        $filterId = filter_input(INPUT_GET, 'email');
        $id = isset($filterId) ? $filterId : NULL;

        if (!$id) {
            throw new Exception('Ocorreu um erro.');
        }

        $this->motoristaService->eliminar($id);
        $this->redirect('../view/motoristas.php');
    }
}
