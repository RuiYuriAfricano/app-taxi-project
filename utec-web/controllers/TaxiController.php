<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
require_once '../services/TaxiService.php';
/**
 * Description of TaxiController
 *
 * @author hp
 */
class TaxiController {
    //put your code here
        
       private $taxiService = NULL;

    public function __construct() {
        $this->taxiService = new TaxiService();
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
                $this->listarTaxi();
            } else if (!$op || $op == 'inserir') {
                $this->inserirTaxi();
            }else if ($op == 'editar') {
                $this->editarTaxi($id);
            }else if ($op == 'novotipo') {
                $this->inserirTipo();
            }
            else if ( $op == 'tabela') {
                $this->verTabela();
            } else if ($op == 'eliminar') {
                $this->eliminarTaxi();
            } else {
                $this->showError("Page not found", "Page for operation " . $op . " was not found!");
            }
        } catch (Exception $e) {
            // some unknown Exception got through here, use application error page to display it
            $this->showError("Application error", $e->getMessage());
        }
    }
    
     public function inserirTaxi() {

        $tipo= '';
        $velocidade='';
        $preco='';
        $codEmpresa='';
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $tipo = isset($_POST['tipoDeViatura']) ? filter_input(INPUT_POST, 'tipoDeViatura') : NULL;
            $velocidade = isset($_POST['vmPorKM']) ? filter_input(INPUT_POST, 'vmPorKM') : NULL;
            $preco = isset($_POST['precoBasePorKM']) ? filter_input(INPUT_POST, 'precoBasePorKM') : NULL;
            $codEmpresa = isset($_POST['id_empresa']) ? filter_input(INPUT_POST, 'id_empresa') : NULL;
            try {
                $this->taxiService->inserir($tipo, $velocidade, $preco, $codEmpresa);
                $this->redirect('../view/taxis.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

        include '../view/taxis.php';
    }
     public function inserirTipo() {

        $tipo= '';
        
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $tipo = isset($_POST['tipo']) ? filter_input(INPUT_POST, 'tipo') : NULL;
            try {
                $this->taxiService->inserirTipo($tipo);
                $this->redirect('../view/viaturas.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

        include '../view/viaturas.php';
    }
    
    
    public function editarTaxi($id)
    {
        $tipo= '';
        $velocidade='';
        $preco='';
        $codEmpresa='';
      
      $errors = array();

        if (isset($_POST['form-submit'])) {

            $tipo = isset($_POST['tipoDeViatura']) ? filter_input(INPUT_POST, 'tipoDeViatura') : NULL;
            $velocidade = isset($_POST['vmPorKM']) ? filter_input(INPUT_POST, 'vmPorKM') : NULL;
            $preco = isset($_POST['precoBasePorKM']) ? filter_input(INPUT_POST, 'precoBasePorKM') : NULL;
            $codEmpresa = isset($_POST['id_empresa']) ? filter_input(INPUT_POST, 'id_empresa') : NULL;
            try {
                $this->taxiService->editar($id, $tipo, $velocidade, $preco, $codEmpresa);
                $this->redirect('../view/taxis.php');
                return;
            } catch (ValidationException $e) {
                $errors = $e->getErrors();
            }
        }

       // include '../view/taxis.php';
    }
    
    public function eliminarTaxi() {

        $filterId = filter_input(INPUT_GET, 'id');
        $id = isset($filterId) ? $filterId : NULL;

        if (!$id) {
            throw new Exception('Ocorreu um erro.');
        }

        $this->taxiService->eliminar($id);
        $this->redirect('../view/taxis.php');
    }
}
