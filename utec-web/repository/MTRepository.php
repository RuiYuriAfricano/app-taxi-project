<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
include_once('../model/MT.php');
include_once('DbConexao.php');
/**
 * Description of MTRepository
 *
 * @author hp
 */
class MTRepository {
    //put your code here
    
    function __construct() {
        $this->db = DbConexao::getInstance();
    }

    public function inserirMT($motorista, $taxi) {

        try {
            $stmt = $this->db->prepare("INSERT INTO motoristataxi ( id_taxi, id_motorista) VALUES(:taxi, :motorista)");
            $stmt->bindparam(":motorista", $motorista);
            $stmt->bindparam(":taxi", $taxi);
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
/*
    public function editarEmpresa($id, $nome) {

        try {
            $stmt = $this->db->prepare(" UPDATE empresa SET nomeEmpresa=:nome  where codEmpresa=:id ");
            $stmt->bindparam(":id", $id);
            $stmt->bindparam(":nome", $nome);
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function eliminarEmpresa($id) {

        try {
            $stmt = $this->db->prepare(" DELETE FROM empresa  where codEmpresa = :id ");
            $stmt->bindparam(":id", $id);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function selecionartodos() {
        $empresa = Array();
        $stmt = $this->db->prepare("SELECT * FROM empresa");
        $stmt->execute();
        $result = $stmt->fetchAll();

        foreach ($result as $empresa) {
            $empresa[] = new Empresa($empresa['codEmpresa'], $empresa['nomeEmpresa']);
        }
        return $empresa;
    }

    public function selecionar($id) {

        $stmt = $this->db->prepare("SELECT * FROM empresa WHERE codEmpresa = :id");
        $stmt->execute([':id' => $id]);
        $empresa = $stmt->fetch();

        return new Empresa($empresa['codEmpresa'], $empresa['nomeEmpresa']);
    }
*/
    public function viewTabelaMT() {
        $mt = Array();
        $stmt = $this->db->prepare("SELECT * FROM motoristataxi");
        $stmt->execute();
        $result = $stmt->fetchAll();
        foreach ($result as $mt) {
            ?>

            <tr>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0"><?php echo $mt['codMotoristaTaxi'] ?></h6>
                </td>
                <td class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-1"><?Php echo $mt['id_motorista'] ?></h6> 
                </td>
            </td>
            <td class="border-bottom-0 text-center">
                <h6 class="fw-semibold mb-1"><?Php echo $mt['id_taxi'] ?></h6>
            </td>
          
            </tr>


            <?php
        }
    }
    
     public function selectMotorista(){
       $stmt = $this->db->prepare("SELECT * FROM motorista ");
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <option value="<?php echo $row['email']; ?>"><?php echo $row['email']; ?></option>
                <?php
            }
        }
    }
    
     public function selectTaxi(){
       $stmt = $this->db->prepare("SELECT * FROM taxi ");
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <option value="<?php echo $row['codTaxi']; ?>"><?php echo $row['codTaxi']; ?></option>
                <?php
            }
        }
    }
}
