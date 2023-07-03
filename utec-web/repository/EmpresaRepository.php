<?php
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
include_once('../model/Empresa.php');
include_once('DbConexao.php');

/**
 * Description of EmpresaRepository
 *
 * @author hp
 */
class EmpresaRepository {

    //put your code here

    function __construct() {
        $this->db = DbConexao::getInstance();
    }

    public function inserirEmpresa($nome) {

        try {
            $stmt = $this->db->prepare("INSERT INTO empresa ( nomeEmpresa) VALUES(:nome)");
            $stmt->bindparam(":nome", $nome);
            $stmt->execute();

            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

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

    public function viewTabelaEmpresa() {
        $empresa = Array();
        $stmt = $this->db->prepare("SELECT * FROM empresa");
        $stmt->execute();
        $result = $stmt->fetchAll();
        foreach ($result as $empresa) {
            ?>

            <tr>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><?php echo $empresa['codEmpresa'] ?></h6>
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?Php echo $empresa['nomeEmpresa'] ?></h6> 
                </td>
            </td>
            <td class="border-bottom-0">
                <div class="d-flex justify-content-evenly align-items-center">
                    <a href="../view/empresa-editar.php?id=<?Php echo $empresa['codEmpresa'] ?> &nome=<?Php echo $empresa['nomeEmpresa'] ?>" class="mb-0 fw-normal btn btn-info">
                        <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Editar Obreiro" class="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z">
                            </path>
                            <path d="M16 5l3 3"></path>
                        </svg>
                    </a>
                    <a href="../controllers/action.php?op=eliminar&id=<?Php echo $empresa['codEmpresa'] ?>&nome=<?php echo $empresa['nomeEmpresa']?>" class="mb-0 fw-normal btn btn-danger">
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

}
