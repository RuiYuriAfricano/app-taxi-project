<?php
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */
include_once('DbConexao.php');

/**
 * Description of views
 *
 * @author hp
 */
class views {

    //put your code here

    private $db;

    function __construct() {
        $this->db = DbConexao::getInstance();
    }

    public function ultimasVianges() {
        $stmt = $this->db->prepare("SELECT * FROM ultimas_10_viagens");
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <tr>
                    <td><?php echo($row['codViagem']); ?></td>
                    <td><?php echo($row['id_taxi']); ?></td>
                    <td><?php echo($row['id_motorista']); ?></td>
                    <td><?php echo($row['id_cliente']); ?></td>
                    <td><?php echo($row['data']); ?></td><!-- comment -->
                </tr>
                <?php
            }
        } else {
            ?>
            <tr>
                <td>Nenhuma viagem </td>
            </tr>
            <?php
        }
    }

    public function clientesGastam() {
        $stmt = $this->db->prepare("SELECT * FROM clientes_mais_gastam");
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <tr>
                    <td><?php echo($row['id_cliente']); ?></td>
                    <td><?php echo($row['total_gasto']); ?></td>
                </tr>
                <?php
            }
        } else {
            ?>
            <tr>
                <td>Nenhuma viagem </td>
            </tr>
            <?php
        }
    }

    public function taxiFactura() {
        $stmt = $this->db->prepare("SELECT * FROM faturamento_ultimos_7_dias");
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <tr>
                    <td><?php echo($row['id_taxi']); ?></td>
                    <td><?php echo($row['tipo']); ?></td>
                    <td><?php echo($row['id_motorista']); ?></td>
                    <td><?php echo($row['valor_total']); ?></td>
                </tr>
                <?php
            }
        } else {
            ?>
            <tr>
                <td>Nenhuma viagem </td>
            </tr>
            <?php
        }
    }
    
       public function Desvios() {
        $stmt = $this->db->prepare("SELECT * FROM maiores_desvios");
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                <tr>
                    <td><?php echo($row['id_motorista']); ?></td>
                    <td><?php echo($row['total_pago']); ?></td>
                    <td><?php echo($row['total_previsto']); ?></td>
                    <td><?php echo($row['diferenca']); ?></td>
                </tr>
                <?php
            }
        } else {
            ?>
            <tr>
                <td>Nenhuma viagem </td>
            </tr>
            <?php
        }
    }

}
