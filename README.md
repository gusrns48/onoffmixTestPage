# onoffmix_test_webpage

How to install

Backend
Frontend

```sh
git clone https://github.com/kinghyeongu/onoffmix-home.git

cd .\Backend\
npm i
npm run server
```

```sh
cd ..
cd .\Frontend\
npm i
npm run start
```


DBschema.txt (Backend/DBschema)
```sh
CREATE TABLE `tistory`.`test1` (
  `key` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NULL,
  `contents` VARCHAR(300) NULL,
  `group1` VARCHAR(100) NULL,
  `group2` VARCHAR(100) NULL,  
  `group3` VARCHAR(100) NULL,  
  `master` VARCHAR(50) NULL,
  `group1join` VARCHAR(1000) default '',
  `group1wait` VARCHAR(1000) default '',
  `group2join` VARCHAR(1000) default '',
  `group2wait` VARCHAR(1000) default '',
  `group3join` VARCHAR(1000) default '',
  `group3wait` VARCHAR(1000) default '',
  PRIMARY KEY (`key`));
```sh
