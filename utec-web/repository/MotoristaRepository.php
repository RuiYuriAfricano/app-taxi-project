<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
include_once('../model/Motorista.php');
include_once('DbConexao.php');
/**
 * Description of MotoristaRepository
 *
 * @author hp
 */
class MotoristaRepository {
    //put your code here
    
        
      function __construct() {
        $this->db = DbConexao::getInstance();
    }

    public function inserirMotorista($email, $morada, $datanasc, $destreza, $codEmpresa) {

        try {
            $stmt = $this->db->prepare("Insert into motorista (email, destreza, id_empresa) values (:email, :destreza, :id_empresa)");
            $stmt->bindparam(":email", $email);
            $stmt->bindparam(":destreza", $destreza);
            $stmt->bindparam(":id_empresa", $codEmpresa);
           
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
     public function inserirActor($email, $morada, $datanasc, $destreza, $codEmpresa) {

        try {
            $stmt = $this->db->prepare("INSERT INTO actor (email, morada, password, datanasc) VALUES(:email,:morada, '0000', :datanasc)");
            $stmt->bindparam(":email", $email);
            $stmt->bindparam(":morada", $morada);
            $stmt->bindparam(":datanasc", $datanasc);
           
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
    
    

    public function editarMotorista($email, $morada, $datanasc, $destreza, $codEmpresa) {

        try {
             $stmt = $this->db->prepare("Update motorista set destreza=:destreza, id_empresa=:id_empresa where email = :email");
              $stmt->bindparam(":email", $email);
            $stmt->bindparam(":destreza", $destreza);
            $stmt->bindparam(":id_empresa", $codEmpresa);
           
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
       public function editarActor($email, $morada, $datanasc, $destreza, $codEmpresa) {

        try {
             $stmt=$this->db->prepare("Update actor set morada=:morada, datanasc=:datanasc where email=:email ");
            $stmt->bindparam(":email", $email);
            $stmt->bindparam(":morada", $morada);
            $stmt->bindparam(":datanasc",$datanasc);
  
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function eliminarMotorista($email) {

        try {
            $stmt = $this->db->prepare(" DELETE FROM motorista  where email = :email ");
            $stmt->bindparam(":email", $email);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
    public function getAdmin(){
        $admins = Array();
        $stmt = $this->db->prepare("SELECT * FROM administrador ");
        $stmt->execute();
        $result = $stmt->fetchAll();
        
        foreach ($result as $row) {
            $admins[] = Array($row['email'], $row['password']);
        }
        return $admins;
    }

    public function selecionartodos() {
        $taxi = Array();
        $stmt = $this->db->prepare("SELECT * FROM taxi ");
        $stmt->execute();
        $result = $stmt->fetchAll();

        foreach ($result as $taxi) {
            $taxi[] = new Taxi($taxi['codEmpresa'], $taxi['nomeEmpresa']);
        }
        return $taxi;
    }

    public function selecionar($id) {

        $stmt = $this->db->prepare("SELECT * FROM taxi WHERE codTaxi = :id");
        $stmt->execute([':id' => $id]);
        $taxi = $stmt->fetch();

        return new Taxi($taxi['codEmpresa'], $taxi['nomeEmpresa']);
    }

    public function viewTabelaMotorista() {
        $motorista = Array();
        $stmt = $this->db->prepare("SELECT * FROM motorista_lista");
        $stmt->execute();
        $result = $stmt->fetchAll();
        foreach ($result as $motorista) {
            ?>
            <tr>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0"><?php echo $motorista['email'] ?></h6>
                </td>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-1"><?Php echo $motorista['morada'] ?></h6> 
                </td>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-1"><?Php echo $motorista['datanasc'] ?></h6>
                    
                </td>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-1"><?Php echo $motorista['destreza'] ?></h6> 
                </td>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-1"><?Php echo $motorista['id_empresa'] ?></h6> 
                </td>
            </td>
            <td class="border-bottom-0 text-center">
                <div class="d-flex justify-content-evenly align-items-center">
                    <a href="../view/motorista-editar.php?email=<?Php echo $motorista['email'] ?> &morada=<?Php echo $motorista['morada']?>&datanasc=<?Php echo $motorista['datanasc'] ?>&destreza=<?Php echo $motorista['destreza'] ?>&empresa=<?Php echo $motorista['id_empresa'] ?>" class="mb-0 fw-normal btn btn-info">
                        <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Editar Obreiro" class="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z">
                            </path>
                            <path d="M16 5l3 3"></path>
                        </svg>
                    </a>
                  <!--  <a href="../controllers/actionMotorista.php?op=eliminar&id=<?Php //echo $motorista['email'] ?>" class="mb-0 fw-normal btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excluir Obreiro" class="icon icon-tabler icon-tabler-eraser" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3">
                            </path>
                            <path d="M18 13.3l-6.3 -6.3"></path>
                        </svg> 
                    </a>-->
                </div>   
            </td>
            </tr>
            <?php
        }
    }
}
