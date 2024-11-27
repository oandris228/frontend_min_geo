-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Nov 27. 10:22
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `mingeo`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `minimalgeometry`
--

CREATE TABLE `minimalgeometry` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `shape_type` varchar(50) DEFAULT NULL,
  `defining_equation` text DEFAULT NULL,
  `favorite_job` varchar(100) DEFAULT NULL,
  `curvature_personality` varchar(100) DEFAULT NULL,
  `coolness` int(11) DEFAULT NULL CHECK (`coolness` between 1 and 10),
  `visibility` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `minimalgeometry`
--

INSERT INTO `minimalgeometry` (`id`, `name`, `shape_type`, `defining_equation`, `favorite_job`, `curvature_personality`, `coolness`, `visibility`) VALUES
(1, 'Wiggletorus', 'Surface', 'x^2 + y^2 + z^2 = sin(xy)', 'Pretends to be a playground slide', 'Roller Coaster', 8, 1),
(2, 'Flat-y McFlatface', 'Plane', 'z = 0', 'Serving as the most boring part of 3D space', 'Perfectly Balanced', 3, 1),
(3, 'SpaghettiLoop', 'Curve', 'x = cos(t), y = sin(t), z = t', 'Hangs out in fancy pasta dishes', 'Twisty But Fun', 6, 1),
(4, 'Soapinator', 'Surface', 'z = sqrt(x^2 + y^2)', 'Lives in soap bubbles, obviously', 'Chill AF', 10, 1),
(5, 'InfinityPretzel', 'Surface', 'sin(x) * sin(y) = z', 'Gets stuck in pretzel machines', 'Wavy and Proud', 6, 1),
(6, 'TwizzleStick', 'Curve', 'x = t^2, y = t^3, z = t^4', 'Pretends to be a candy cane', 'Super Twisty', 7, 1),
(7, 'HyperBowl', 'Surface', 'z = 1/(x^2 + y^2)', 'Makes you feel like you’re falling forever', 'Spicy at the Edges', 9, 1),
(8, 'SaddlePal', 'Surface', 'z = x^2 - y^2', 'Dreams of being a horse saddle', 'Bendy but Balanced', 5, 1),
(9, 'SlinkyLine', 'Curve', 'x = t, y = cos(t), z = sin(t)', 'Moonlights as a phone cord', 'Wiggly and Fun', 8, 1),
(10, 'DonutLord', 'Surface', '(x^2 + y^2 + z^2 - 1)^2 = 4(x^2 + y^2)', 'Lives in bakeries and topological conversations', 'Delightfully Loopy', 10, 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `minimalgeometry`
--
ALTER TABLE `minimalgeometry`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `minimalgeometry`
--
ALTER TABLE `minimalgeometry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
