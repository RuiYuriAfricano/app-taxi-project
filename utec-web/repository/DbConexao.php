<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of DbConexao
 *
 * @author hp
 */
class DbConexao {
    //put your code here
     private static $instance = NULL;
    
    public static function getInstance() {

        if (!isset(self::$instance)) {
            try {
                self:: $instance = new PDO("mysql:host=localhost;dbname=dbtaxi", 'root', '');
                self:: $instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        }
        return self::$instance;
    }
}
