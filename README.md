# onoffmix_test_webpage

## How to install
set any folder
```sh
git clone https://github.com/kinghyeongu/onoffmix-home.git
cd .\Backend\
npm i
npm run server
```

!!!another terminal!!!
```sh
cd ..
cd .\Frontend\
npm i
npm run start
```
## frame
DB : MySQL 8.0
WebServer : node.js
Freamework : react, node.js
version control : github

## DBschema.txt (Backend/DBschema)
```sh
CREATE TABLE `tistory`.`test3` (
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
### Backend error

Client does not support authentication protocol requested by server; consider upgrading MySQL  client

: alter user 'root'@'localhost' identified with mysql_native_password by '1234';<br><hr>

Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY...

: set sql_safe_updates = 0;<br>
or<br>
: MySQL workbench > Edit > Prederences... > SQL Editor - SafeUpdates(rejects Up...) uncheck<br><hr>

if you "delete *from test1;"

: you must "ALTER TABLE test1 AUTO_INCREMENT=1;"<br><hr>

error : indexOf ...

: ex) update test1 set group1join = '' where title = 'title'<br>
  groupsjoin, groupswait must be '' not null
  
  
## role check
1. 회원가입 및 로그인 (O)
2. 서비스 메인 페이지 (△) : 정렬 기준 실패
3. 모임 상세 및 신청 페이지(통합) (O)
4. 모임 개설자 메뉴 (O)
5. 모임 신청자 메뉴 (O)
