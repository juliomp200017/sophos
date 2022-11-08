create database GamesRental
use GamesRental
create table client (
idclient int primary key identity (1,1),
clientname varchar(50),
telephone int,
email varchar(50),
age int,
clientaddress varchar(50),
indentificationcard int
)

create table game (
idgame int primary key identity (1,1),
gamename varchar(50),
protagonist varchar(50),
director varchar(50),
producer varchar(50),
gameplatform varchar(50),
releasedate DATE,
gamerental float
)
create table rentals (
idrental int primary key identity (1,1),
idclient int ,
idgame int ,
rentaldate DATE,
rentaldelivery DATE,
price float
foreign key(idclient) references client(idclient),
foreign key(idgame) references game(idgame)
)

INSERT INTO game VALUES ('HALO','Master Chief','Julio Perez','Alber Comesaña','XBOX','10-10-2020',20000);
INSERT INTO game VALUES ('Call of Duty','Pedrito Perez','Pedro lopez','P. Guardiola','Play Station','10-06-2010',40000);
INSERT INTO game VALUES ('GTA V','CJ','George A.','James Rodrigues','Play Station','01-10-2015',15000);

INSERT INTO client VALUES ('Rafael noguera',123456789,'Rnoguera@gamil.com',18,'Cra 5 # 17-28',147258369);
INSERT INTO client VALUES ('Jorge Oñate',987654321,'Joñate@gmail.com',30,'Cra8 # 16-90',741852963);
INSERT INTO client VALUES ('David Perez',789123456,'Dperez@gmail.com',25,'Cra6 # 11-50',357198426);

INSERT INTO rentals VALUES (1,1,'01-10-2022','02-10-2022',20000);
INSERT INTO rentals VALUES (1,2,'02-11-2022','02-12-2022',40000);
INSERT INTO rentals VALUES (2,3,'01-07-2022','01-09-2022',15000);
INSERT INTO rentals VALUES (2,1,'01-10-2022','02-10-2022',20000);
INSERT INTO rentals VALUES (3,2,'01-10-2022','02-10-2022',40000);
INSERT INTO rentals VALUES (3,2,'04-12-2021','02-10-2022',40000);
