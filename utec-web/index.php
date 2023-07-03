<?php session_start();?>
<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->

<html>
    <head>
        <meta charset="UTF-8">
        <title>Utec-Login</title>
        
    </head>
    <body class="bg-dark">
       

    </p>


    <div class="card text-center text-warning mx-auto border-dark " style="max-width: 36rem; " >
        <div class="card-body">
            <h3 class="card-title " ><pre>XPTO SOLUTIONS</h3>
                            <p class="card-text">
                            <div class="container-sm">
                                <form method="post" action="controllers/actionLogin.php">
                                    <div class="row mb-3">
                                        <label class="col-sm-2 col-form-label "><p class="text-black">USUARIO</p></label>
                                        <div class="col-sm-8">
                                            <input type="email" class="form-control border-dark" id="email" name="email" required >
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <label class="col-sm-2 col-form-label  "><p class="text-black">SENHA</p></label>
                                        <div class="col-sm-8">
                                            <input type="password" class="form-control border-dark " id="password" name="password" required > 
                                        </div>
                                    </div>
                                    
                    <?php if (isset($_SESSION['erro'])): ?>
            <p class="text-bg-danger">
                      <?php echo $_SESSION['erro'] ?> </p>
                        <?php unset($_SESSION['erro']); ?>
                    <?php endif; ?>
                                  
                                    </p>
                                    <button type="submit" class="btn btn-outline-warning">Entrar</button>
                                </form>
                            </div>
                            </p>

                        </div>
                    
                    </div>
               
            
</body>
</html>
