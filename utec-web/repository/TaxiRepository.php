<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
include_once('../model/Taxi.php');
include_once('DbConexao.php');
/**
 * Description of TaxiRepository
 *
 * @author hp
 */
class TaxiRepository {
    //put your code here
    
      function __construct() {
        $this->db = DbConexao::getInstance();
    }

    public function inserirTaxi($tipoDeViatura, $vmPorKM, $precoBasePorKM, $id_empresa) {

        try {
            $stmt = $this->db->prepare("INSERT INTO taxi (x, y, id_TDV, vmPorKM, precoBasePorKM, disponiblidade, filaEspera, id_empresa) VALUES('0', '0', :tipoDeViatura, :vmPorKM, :precoBasePorKM,'Disponivel','0', :id_empresa )");
            $stmt->bindparam(":tipoDeViatura", $tipoDeViatura);
            $stmt->bindparam(":vmPorKM", $vmPorKM);
            $stmt->bindparam(":precoBasePorKM", $precoBasePorKM);
            $stmt->bindparam(":id_empresa", $id_empresa);
           
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
      public function inserirTipo($tipoDeViatura) {

        try {
            $stmt = $this->db->prepare("INSERT INTO tipodeviatura (tipo) VALUES(:tipoDeViatura )");
            $stmt->bindparam(":tipoDeViatura", $tipoDeViatura); 
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function editarTaxi($id, $tipo, $velocidade, $preco, $codEmpresa) {

        try {
             $stmt = $this->db->prepare("Update taxi set id_TDV =:tipoDeViatura, vmPorKM=:vmPorKM, precoBasePorKM=:precoBasePorKM, id_empresa=:id_empresa where codTaxi = :id ");
            $stmt->bindparam(":tipoDeViatura", $tipo);
            $stmt->bindparam(":vmPorKM", $velocidade);
            $stmt->bindparam(":precoBasePorKM", $preco);
            $stmt->bindparam(":id_empresa", $codEmpresa);
            $stmt->bindparam(":id", $id);
           
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function eliminarTaxi($id) {

        try {
            $stmt = $this->db->prepare(" DELETE FROM taxi  where codTaxi = :id ");
            $stmt->bindparam(":id", $id);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
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
    
    public function selectTDV(){
       $stmt = $this->db->prepare("SELECT * FROM tipodeviatura ");
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <option value="<?php echo $row['codTDV']; ?>"><?php echo $row['tipo']; ?></option>
                <?php
            }
        }
    }
    
       public function selectEmpresa(){
       $stmt = $this->db->prepare("SELECT * FROM empresa ");
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <option value="<?php echo $row['codEmpresa']; ?>"><?php echo $row['nomeEmpresa']; ?></option>
                <?php
            }
        }
    }
    
      

    public function viewTabelaTaxi() {
        $taxi = Array();
        $stmt = $this->db->prepare("SELECT * FROM taxi_lista");
        $stmt->execute();
        $result = $stmt->fetchAll();
        foreach ($result as $taxi) {
            ?>
            <tr>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><?php echo $taxi['codTaxi'] ?></h6>
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?Php echo $taxi['tipo'] ?></h6> 
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?Php echo $taxi['vmPorKM'] ?></h6>
                    
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?Php echo $taxi['precoBasePorKM'] ?></h6> 
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?Php echo $taxi['id_empresa'] ?></h6> 
                </td>
            </td>
            <td class="border-bottom-0">
                <div class="d-flex justify-content-evenly align-items-center">
                    <a href="../view/taxi-editar.php?id=<?Php echo $taxi['codTaxi'] ?> &tipo=<?Php echo $taxi['id_TDV']?>&velocidade=<?Php echo $taxi['vmPorKM'] ?>&preco=<?Php echo $taxi['precoBasePorKM'] ?>&empresa=<?Php echo $taxi['id_empresa'] ?>" class="mb-0 fw-normal btn btn-info">
                        <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Editar Obreiro" class="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z">
                            </path>
                            <path d="M16 5l3 3"></path>
                        </svg>
                    </a>
                    <a href="../controllers/actionTaxi.php?op=eliminar&id=<?Php echo $taxi['codTaxi'] ?>" class="mb-0 fw-normal btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excluir Obreiro" class="icon icon-tabler icon-tabler-eraser" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3">
                            </path>
                            <path d="M18 13.3l-6.3 -6.3"></path>
                        </svg> 
                    </a>
                </div>   
            </td>
            </tr>
            <?php
        }
    }
    
      public function viewTabelaTipo() {
        $empresa = Array();
        $stmt = $this->db->prepare("SELECT * FROM tipodeviatura");
        $stmt->execute();
        $result = $stmt->fetchAll();
        foreach ($result as $empresa) {
            ?>

            <tr>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><?php echo $empresa['codTDV'] ?></h6>
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?Php echo $empresa['tipo'] ?></h6> 
                </td>
            </td>
          
            </tr>


            <?php
        }
    }
}
