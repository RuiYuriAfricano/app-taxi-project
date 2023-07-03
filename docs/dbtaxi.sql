-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Jul-2023 às 17:13
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbtaxi`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `actor`
--

CREATE TABLE `actor` (
  `email` varchar(50) NOT NULL,
  `morada` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `datanasc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `actor`
--

INSERT INTO `actor` (`email`, `morada`, `password`, `datanasc`) VALUES
('20201175@isptec.co.ao', 'escongolenses, casa71', '0000', '2020-10-10'),
('Celeste@gmail.com', 'golf1', '0987654321', '2002-05-26'),
('cliente10@gmail.com', 'morada10', '0000', '2000-05-02'),
('cliente1@gmail.com', 'morada1', '0000', '2000-05-02'),
('cliente2@gmail.com', 'morada2', '0000', '2000-05-02'),
('cliente3@gamil.com', 'morada3', '0000', '2000-05-02'),
('cliente4@gmail.com', 'morada4', '0000', '2000-05-02'),
('cliente5@gmail.com', 'morada5', '0000', '2000-05-02'),
('cliente6@gmail.com', 'morada6', '0000', '2000-05-02'),
('cliente7@gmail.com', 'morada7', '0000', '2000-05-02'),
('cliente8@gmail.com', 'morada8', '0000', '2000-05-02'),
('cliente9@gmail.com', 'morada9', '0000', '2000-05-02'),
('franio@gmail.com', 'golf2', '0000', '1995-06-11'),
('juliacamana.2017@gmail.com', 'golf1', '1234567890', '2000-05-02'),
('motorista1@gmail.com', 'morada1   ', '0000', '1999-05-10'),
('motorista2@gmail.com', 'morada2', '0000', '2000-06-11');

-- --------------------------------------------------------

--
-- Estrutura da tabela `administrador`
--

CREATE TABLE `administrador` (
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `administrador`
--

INSERT INTO `administrador` (`email`, `password`) VALUES
('utec@gmail.com', '1234567890');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `email` varchar(50) NOT NULL,
  `x` varchar(50) NOT NULL,
  `y` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`email`, `x`, `y`) VALUES
('cliente10@gmail.com', '0', '0'),
('cliente1@gmail.com', '0', '0'),
('cliente2@gmail.com', '0', '0'),
('cliente3@gamil.com', '0', '0'),
('cliente4@gmail.com', '0', '0'),
('cliente5@gmail.com', '0', '0'),
('cliente6@gmail.com', '0', '0'),
('cliente7@gmail.com', '0', '0'),
('cliente8@gmail.com', '0', '0'),
('cliente9@gmail.com', '0', '0');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `clientes_mais_gastam`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `clientes_mais_gastam` (
`id_cliente` varchar(100)
,`total_gasto` double
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

CREATE TABLE `empresa` (
  `codEmpresa` int(11) NOT NULL,
  `nomeEmpresa` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `empresa`
--

INSERT INTO `empresa` (`codEmpresa`, `nomeEmpresa`) VALUES
(10, 'Comercial'),
(13, 'empresa1'),
(15, 'empresa4'),
(16, 'empresa5');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `faturamento_ultimos_7_dias`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `faturamento_ultimos_7_dias` (
`id_taxi` int(11)
,`tipo` varchar(50)
,`id_motorista` varchar(100)
,`valor_total` double
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `maiores_desvios`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `maiores_desvios` (
`id_motorista` varchar(100)
,`total_pago` double
,`total_previsto` double
,`diferenca` double
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `motorista`
--

CREATE TABLE `motorista` (
  `email` varchar(50) NOT NULL,
  `destreza` varchar(1) NOT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `motorista`
--

INSERT INTO `motorista` (`email`, `destreza`, `id_empresa`) VALUES
('20201175@isptec.co.ao', '1', 10),
('Celeste@gmail.com', '1', 10),
('franio@gmail.com', '2', 10),
('juliacamana.2017@gmail.com', '3', 10),
('motorista1@gmail.com', '2', 13),
('motorista2@gmail.com', '3', 15);

--
-- Acionadores `motorista`
--
DELIMITER $$
CREATE TRIGGER `eliminar_actor_motorista` BEFORE DELETE ON `motorista` FOR EACH ROW BEGIN
DELETE FROM actor WHERE old.email = actor.email;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `motoristataxi`
--

CREATE TABLE `motoristataxi` (
  `codMotoristaTaxi` int(11) NOT NULL,
  `id_taxi` int(11) DEFAULT NULL,
  `id_motorista` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `motoristataxi`
--

INSERT INTO `motoristataxi` (`codMotoristaTaxi`, `id_taxi`, `id_motorista`) VALUES
(1, 13, '20201175@isptec.co.ao'),
(2, 14, 'Celeste@gmail.com'),
(3, 15, 'franio@gmail.com'),
(4, 16, 'juliacamana.2017@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `motorista_lista`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `motorista_lista` (
`email` varchar(50)
,`morada` varchar(50)
,`datanasc` date
,`password` varchar(20)
,`destreza` varchar(1)
,`id_empresa` int(11)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `taxi`
--

CREATE TABLE `taxi` (
  `codTaxi` int(11) NOT NULL,
  `x` varchar(100) NOT NULL,
  `y` varchar(100) NOT NULL,
  `id_TDV` int(11) NOT NULL,
  `vmPorKM` float NOT NULL,
  `precoBasePorKM` float NOT NULL,
  `disponiblidade` varchar(100) NOT NULL,
  `filaEspera` enum('0','1') DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `taxi`
--

INSERT INTO `taxi` (`codTaxi`, `x`, `y`, `id_TDV`, `vmPorKM`, `precoBasePorKM`, `disponiblidade`, `filaEspera`, `id_empresa`) VALUES
(13, '0', '0', 2, 120, 1000, 'Disponivel', '0', 10),
(14, '0', '0', 2, 250, 1500, 'Disponivel', '0', 10),
(15, '0', '0', 1, 250, 1500, 'Disponivel', '0', 10),
(16, '0', '0', 1, 300, 2000, 'Disponivel', '0', 10),
(17, '0', '0', 3, 120, 1000, 'Disponivel', '0', 10),
(18, '0', '0', 3, 80, 750, 'Disponivel', '0', 10),
(20, '0', '0', 3, 60, 500, 'Disponivel', '0', 13);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `taxi_lista`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `taxi_lista` (
`codTaxi` int(11)
,`x` varchar(100)
,`y` varchar(100)
,`id_TDV` int(11)
,`vmPorKM` float
,`precoBasePorKM` float
,`disponiblidade` varchar(100)
,`filaEspera` enum('0','1')
,`id_empresa` int(11)
,`tipo` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipodeviatura`
--

CREATE TABLE `tipodeviatura` (
  `codTDV` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tipodeviatura`
--

INSERT INTO `tipodeviatura` (`codTDV`, `tipo`) VALUES
(2, 'Carrinhas de 9 lugares'),
(1, 'Carros ligeiros'),
(3, 'Motorizada');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `ultimas_10_viagens`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `ultimas_10_viagens` (
`codViagem` int(11)
,`id_taxi` int(11)
,`id_motorista` varchar(100)
,`id_cliente` varchar(100)
,`data` date
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `viagem`
--

CREATE TABLE `viagem` (
  `codViagem` int(11) NOT NULL,
  `id_motoristaTaxi` int(11) DEFAULT NULL,
  `id_cliente` varchar(100) DEFAULT NULL,
  `custoFinal` float DEFAULT NULL,
  `custoEstimado` float DEFAULT NULL,
  `xPartida` varchar(100) DEFAULT NULL,
  `yPartida` varchar(100) DEFAULT NULL,
  `xDestino` varchar(100) DEFAULT NULL,
  `yDestino` varchar(100) DEFAULT NULL,
  `distanciaPercorrida` float DEFAULT NULL,
  `tempoEstimado` varchar(20) DEFAULT NULL,
  `tempoReal` varchar(20) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `factorFiabilidade` varchar(100) DEFAULT NULL,
  `classificacaoMotorista` varchar(100) DEFAULT NULL,
  `condicionantes` enum('Meteorologica','Transito') DEFAULT NULL,
  `estadoViagem` enum('Marcada','Satisfeita','Instantanea') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `viagem`
--

INSERT INTO `viagem` (`codViagem`, `id_motoristaTaxi`, `id_cliente`, `custoFinal`, `custoEstimado`, `xPartida`, `yPartida`, `xDestino`, `yDestino`, `distanciaPercorrida`, `tempoEstimado`, `tempoReal`, `data`, `factorFiabilidade`, `classificacaoMotorista`, `condicionantes`, `estadoViagem`) VALUES
(1, 1, 'cliente1@gmail.com', 10000, 10000, 'Golf', NULL, 'Benfica', NULL, 3, NULL, NULL, '2023-07-02', NULL, 'Boa', NULL, 'Satisfeita'),
(2, 1, 'cliente2@gmail.com', 7000, 10000, 'Mutamba', NULL, 'Golf2', NULL, 3, NULL, NULL, '2023-07-01', NULL, 'Media', NULL, 'Satisfeita'),
(3, 1, 'cliente3@gamil.com', 14000, 7000, 'Mutamba', NULL, 'Sequele', NULL, 14, NULL, NULL, '2023-07-01', NULL, 'Boa', 'Transito', 'Satisfeita'),
(4, 1, 'cliente3@gamil.com', 3000, 3100, 'Talatona', NULL, 'Camama', NULL, 1, NULL, NULL, '2023-07-01', NULL, 'Muito Boa', 'Transito', 'Satisfeita'),
(5, 1, 'cliente10@gmail.com', 1950, 1900, 'Patriota', NULL, 'Avo-Kumbi', NULL, 2, NULL, NULL, '2023-07-02', NULL, 'Normal', NULL, 'Satisfeita'),
(6, 2, 'cliente5@gmail.com', 10000, 3100, 'Talatona', NULL, 'Kilamba', NULL, 5, NULL, NULL, '2023-07-01', NULL, 'Ma', 'Transito', 'Instantanea'),
(7, 2, 'cliente1@gmail.com', 3000, 1000, 'Gamek', NULL, 'Kimbango', NULL, 2, NULL, NULL, '2023-07-01', NULL, 'Ma', 'Transito', 'Instantanea'),
(8, 2, 'cliente7@gmail.com', 22000, 19000, 'Quissama', NULL, 'Centro-cidade', NULL, 14, NULL, NULL, '2023-07-02', NULL, NULL, 'Meteorologica', 'Satisfeita'),
(9, 2, 'cliente8@gmail.com', 2300, 2300, '0', NULL, '0', NULL, 2, NULL, NULL, '2023-06-28', NULL, 'Normal', NULL, 'Satisfeita'),
(10, 2, 'cliente1@gmail.com', 14000, 15000, '0', NULL, '0', NULL, 6, NULL, NULL, '2023-07-03', NULL, NULL, 'Transito', 'Marcada'),
(11, 3, 'cliente9@gmail.com', 7000, 7000, '0', NULL, '0', NULL, 2, NULL, NULL, '2023-07-03', NULL, 'Normal', 'Meteorologica', 'Satisfeita'),
(12, 3, 'cliente8@gmail.com', 7000, 7000, '0', NULL, '0', NULL, 3, NULL, NULL, '2023-07-02', NULL, 'Normal', 'Meteorologica', 'Satisfeita'),
(13, 3, 'cliente7@gmail.com', 2500, 1900, '0', NULL, '0', NULL, 5, NULL, NULL, '2023-07-01', NULL, 'Boa', NULL, 'Satisfeita'),
(14, 3, 'cliente1@gmail.com', 10000, 9600, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-07-01', NULL, 'Suficiente', 'Transito', 'Instantanea'),
(15, 3, 'cliente3@gamil.com', 10000, 3100, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-07-01', NULL, 'Pessima', NULL, 'Satisfeita'),
(16, 4, 'cliente6@gmail.com', 14000, 12000, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-06-29', NULL, 'Normal', 'Transito', 'Satisfeita'),
(17, 4, 'cliente8@gmail.com', 7000, 5800, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-07-02', NULL, 'Normal', NULL, 'Satisfeita'),
(18, 4, 'cliente6@gmail.com', 3500, 3000, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-07-01', NULL, 'Normal', NULL, 'Satisfeita'),
(19, 4, 'cliente1@gmail.com', 7000, 5800, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-07-02', NULL, NULL, NULL, 'Satisfeita'),
(20, 4, 'cliente7@gmail.com', 13000, 10000, '0', NULL, '0', NULL, 0, NULL, NULL, '2023-07-10', NULL, NULL, NULL, 'Satisfeita');

-- --------------------------------------------------------

--
-- Estrutura para vista `clientes_mais_gastam`
--
DROP TABLE IF EXISTS `clientes_mais_gastam`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `clientes_mais_gastam`  AS SELECT `viagem`.`id_cliente` AS `id_cliente`, sum(`viagem`.`custoFinal`) AS `total_gasto` FROM `viagem` GROUP BY `viagem`.`id_cliente` ORDER BY sum(`viagem`.`custoFinal`) DESC LIMIT 0, 5 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `faturamento_ultimos_7_dias`
--
DROP TABLE IF EXISTS `faturamento_ultimos_7_dias`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `faturamento_ultimos_7_dias`  AS SELECT `mt`.`id_taxi` AS `id_taxi`, `tv`.`tipo` AS `tipo`, `mt`.`id_motorista` AS `id_motorista`, sum(`v`.`custoFinal`) AS `valor_total` FROM (((`viagem` `v` join `motoristataxi` `mt` on(`v`.`id_motoristaTaxi` = `mt`.`codMotoristaTaxi`)) join `taxi` `t` on(`t`.`codTaxi` = `mt`.`id_taxi`)) join `tipodeviatura` `tv` on(`tv`.`codTDV` = `t`.`id_TDV`)) WHERE `v`.`data` >= curdate() - interval 7 day AND `v`.`data` <= curdate() GROUP BY `v`.`id_motoristaTaxi`, `mt`.`codMotoristaTaxi`, `t`.`codTaxi`, `t`.`id_TDV` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `maiores_desvios`
--
DROP TABLE IF EXISTS `maiores_desvios`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `maiores_desvios`  AS SELECT `mt`.`id_motorista` AS `id_motorista`, sum(`v`.`custoFinal`) AS `total_pago`, sum(`v`.`custoEstimado`) AS `total_previsto`, sum(`v`.`custoFinal`) - sum(`v`.`custoEstimado`) AS `diferenca` FROM (`viagem` `v` join `motoristataxi` `mt` on(`v`.`id_motoristaTaxi` = `mt`.`codMotoristaTaxi`)) GROUP BY `mt`.`id_motorista` ORDER BY sum(`v`.`custoFinal`) - sum(`v`.`custoEstimado`) DESC LIMIT 0, 5 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `motorista_lista`
--
DROP TABLE IF EXISTS `motorista_lista`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `motorista_lista`  AS SELECT `a`.`email` AS `email`, `a`.`morada` AS `morada`, `a`.`datanasc` AS `datanasc`, `a`.`password` AS `password`, `m`.`destreza` AS `destreza`, `m`.`id_empresa` AS `id_empresa` FROM (`actor` `a` join `motorista` `m` on(`a`.`email` = `m`.`email`)) ;

-- --------------------------------------------------------

--
-- Estrutura para vista `taxi_lista`
--
DROP TABLE IF EXISTS `taxi_lista`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `taxi_lista`  AS SELECT `t`.`codTaxi` AS `codTaxi`, `t`.`x` AS `x`, `t`.`y` AS `y`, `t`.`id_TDV` AS `id_TDV`, `t`.`vmPorKM` AS `vmPorKM`, `t`.`precoBasePorKM` AS `precoBasePorKM`, `t`.`disponiblidade` AS `disponiblidade`, `t`.`filaEspera` AS `filaEspera`, `t`.`id_empresa` AS `id_empresa`, `v`.`tipo` AS `tipo` FROM (`taxi` `t` join `tipodeviatura` `v` on(`t`.`id_TDV` = `v`.`codTDV`)) ;

-- --------------------------------------------------------

--
-- Estrutura para vista `ultimas_10_viagens`
--
DROP TABLE IF EXISTS `ultimas_10_viagens`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ultimas_10_viagens`  AS SELECT `v`.`codViagem` AS `codViagem`, `mt`.`id_taxi` AS `id_taxi`, `mt`.`id_motorista` AS `id_motorista`, `v`.`id_cliente` AS `id_cliente`, `v`.`data` AS `data` FROM (`viagem` `v` join `motoristataxi` `mt` on(`mt`.`codMotoristaTaxi` = `v`.`id_motoristaTaxi`)) WHERE `v`.`estadoViagem` <> 'Marcada' ORDER BY `v`.`data` DESC LIMIT 0, 10 ;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`email`);

--
-- Índices para tabela `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`email`);

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`email`);

--
-- Índices para tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`codEmpresa`);

--
-- Índices para tabela `motorista`
--
ALTER TABLE `motorista`
  ADD PRIMARY KEY (`email`),
  ADD KEY `id_empresa` (`id_empresa`);

--
-- Índices para tabela `motoristataxi`
--
ALTER TABLE `motoristataxi`
  ADD PRIMARY KEY (`codMotoristaTaxi`),
  ADD KEY `id_taxi` (`id_taxi`),
  ADD KEY `id_motorista` (`id_motorista`);

--
-- Índices para tabela `taxi`
--
ALTER TABLE `taxi`
  ADD PRIMARY KEY (`codTaxi`),
  ADD KEY `id_empresa` (`id_empresa`),
  ADD KEY `id_TDV` (`id_TDV`);

--
-- Índices para tabela `tipodeviatura`
--
ALTER TABLE `tipodeviatura`
  ADD PRIMARY KEY (`codTDV`),
  ADD UNIQUE KEY `tipo` (`tipo`);

--
-- Índices para tabela `viagem`
--
ALTER TABLE `viagem`
  ADD PRIMARY KEY (`codViagem`),
  ADD KEY `id_motoristaTaxi` (`id_motoristaTaxi`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `codEmpresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `motoristataxi`
--
ALTER TABLE `motoristataxi`
  MODIFY `codMotoristaTaxi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `taxi`
--
ALTER TABLE `taxi`
  MODIFY `codTaxi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `tipodeviatura`
--
ALTER TABLE `tipodeviatura`
  MODIFY `codTDV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `viagem`
--
ALTER TABLE `viagem`
  MODIFY `codViagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`email`) REFERENCES `actor` (`email`);

--
-- Limitadores para a tabela `motorista`
--
ALTER TABLE `motorista`
  ADD CONSTRAINT `motorista_ibfk_1` FOREIGN KEY (`email`) REFERENCES `actor` (`email`),
  ADD CONSTRAINT `motorista_ibfk_2` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`codEmpresa`);

--
-- Limitadores para a tabela `motoristataxi`
--
ALTER TABLE `motoristataxi`
  ADD CONSTRAINT `motoristataxi_ibfk_1` FOREIGN KEY (`id_taxi`) REFERENCES `taxi` (`codTaxi`),
  ADD CONSTRAINT `motoristataxi_ibfk_2` FOREIGN KEY (`id_motorista`) REFERENCES `motorista` (`email`);

--
-- Limitadores para a tabela `taxi`
--
ALTER TABLE `taxi`
  ADD CONSTRAINT `id_TDV` FOREIGN KEY (`id_TDV`) REFERENCES `tipodeviatura` (`codTDV`),
  ADD CONSTRAINT `taxi_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`codEmpresa`);

--
-- Limitadores para a tabela `viagem`
--
ALTER TABLE `viagem`
  ADD CONSTRAINT `viagem_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
