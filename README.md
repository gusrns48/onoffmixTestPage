# onoffmix_test_webpage

## How to install
set any folder
```sh
git clone https://github.com/kinghyeongu/onoffmix-home.git
cd .\Backend\
npm i
npm run server
```

```sh
!!!another terminal!!!
cd ..
cd .\Frontend\
npm i
npm run start
```

## DBschema.txt (Backend/DBschema)
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
```

## If you have Error..
### Backend error : 

Client does not support authentication protocol requested by server; consider upgrading MySQL  client

: alter user 'root'@'localhost' identified with mysql_native_password by '1234';<br><hr>

Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY...

: set sql_safe_updates = 0;

if you "delete *from test1;"

: you must "ALTER TABLE test1 AUTO_INCREMENT=1;"

error : indexOf ...

: ex) update test1 set group1join = '' where title = 'title'
  groupsjoin, groupswait must be '' not null
