# mysql

 new database mbvr_live;

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float(10,2) NOT NULL,
  `creat_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;
 
INSERT INTO `goods` (`id`, `name`, `price`, `creat_time`) VALUES
(1, 'apple', 5.00, '2017-05-11 00:22:10'),
(2, 'banner', 5.00, '2017-05-11 01:37:37');


install what you have to import,specific modules shall be found in *.js


run as you type npm run dev
