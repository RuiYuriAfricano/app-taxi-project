-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Jul-2023 às 02:55
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `email` varchar(50) NOT NULL,
  `x` varchar(50) NOT NULL,
  `y` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'empresa1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `motorista`
--

CREATE TABLE `motorista` (
  `email` varchar(50) NOT NULL,
  `destreza` varchar(100) NOT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `motoristataxi`
--

CREATE TABLE `motoristataxi` (
  `codMotoristaTaxi` int(11) NOT NULL,
  `id_taxi` int(11) DEFAULT NULL,
  `id_motorista` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `taxi`
--

CREATE TABLE `taxi` (
  `codTaxi` int(11) NOT NULL,
  `x` varchar(100) NOT NULL,
  `y` varchar(100) NOT NULL,
  `tipoDeViatura` varchar(100) NOT NULL,
  `vmPorKM` float NOT NULL,
  `precoBasePorKM` float NOT NULL,
  `disponiblidade` varchar(100) NOT NULL,
  `filaEspera` enum('0','1') DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `pontoPartida` varchar(100) DEFAULT NULL,
  `pontoDestino` varchar(100) DEFAULT NULL,
  `distanciaPercorrida` float DEFAULT NULL,
  `tempoEstimado` time DEFAULT NULL,
  `tempoReal` time DEFAULT NULL,
  `data` date DEFAULT NULL,
  `factorFiabilidade` varchar(100) DEFAULT NULL,
  `classificacaoMotorista` varchar(100) DEFAULT NULL,
  `condicionantes` enum('Meteorologica','Transito') DEFAULT NULL,
  `estadoViagem` enum('Marcada','Satisfeita','Instantanea') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `actor`
--
ALTER TABLE `actor`
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
  ADD KEY `id_empresa` (`id_empresa`);

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
  MODIFY `codEmpresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `motoristataxi`
--
ALTER TABLE `motoristataxi`
  MODIFY `codMotoristaTaxi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `taxi`
--
ALTER TABLE `taxi`
  MODIFY `codTaxi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `viagem`
--
ALTER TABLE `viagem`
  MODIFY `codViagem` int(11) NOT NULL AUTO_INCREMENT;

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
