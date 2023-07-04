<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../services/MTService.php';
/**
 * Description of MTController
 *
 * @author hp
 */
class MTController {
    //put your code here
       private $mtService = NULL;

    public function __construct() {
        $this->mtService = new MTService();
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
                $this->listarMT();
            } else if (!$op || $op == 'inserir') {
                $this->inserirMT();
            }else if ($op == 'editar') {
                $this->editarMT($id);
            }else if ( $op == 'tabela') {
                $this->verTabelaMT();
            } else if ($op == 'eliminar') {
                $this->eliminarMT();
            } else {
                $this->showError("Page not found", "Page for operation " . $op . " was not found!");
            }
        } catch (Exception $e) {
            // some unknown Exception got through here, use application error page to display it
            $this->showError("Application error", $e->getMessage());
        }
    }
    
     public function inserirMT() {

        $motorista = '';
        $taxi = '';
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $motorista = isset($_POST['motorista']) ? filter_input(INPUT_POST, 'motorista') : NULL;
            $taxi = isset($_POST['taxi']) ? filter_input(INPUT_POST, 'taxi') : NULL;
           
            try {
                $this->mtService->inserirMT($motorista, $taxi);
                $this->redirect('../view/motorista-taxi.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

        include '../view/motorista-taxi.php';
    }
    
   /* 
    public function editarMT($id)
    {
        if (isset($_POST['form-submit'])) {  
            $nome = isset($_POST['motorista']) ? filter_input(INPUT_POST, 'motorista') : NULL;
            try {
                $this->mtService->editarEmpresa($id, $nome);
                 $this->redirect('../view/motorista-taxi.php');
                return;
            } catch (Exception $e) {
            }
        }
    }
    
    public function eliminarMT() {

        $filterId = filter_input(INPUT_GET, 'id');
        $id = isset($filterId) ? $filterId : NULL;

        if (!$id) {
            throw new Exception('Ocorreu um erro.');
        }

        $this->mtService->eliminarMT($id);
        $this->redirect('../view/motorista-tax.php');
    }*/
}
