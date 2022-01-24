const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

const router = express.Router()

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "1234", //mysql의 password
    database : "tistory", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/idplz", (req,res)=>{
    const title = req.body.title;
    const contents = req.body.contents;
    const group1 = req.body.group1;
    const group2 = req.body.group2;
    const group3 = req.body.group3;
    const master = req.body.master;
    
    /*
    console.log(req.body.title);
    console.log(req.body.contents);
    console.log(req.body.group1);
    console.log(req.body.group2);
    console.log(req.body.group3);
    */
    connection.query("INSERT INTO test1 (title, contents, group1, group2, group3, master) values (?, ?, ?, ?, ?, ?)",[title, contents, group1, group2, group3, master],
    function(err,rows,fields){
        if(err){
            console.log("모임 개설 실패");
        }else{
            console.log("모임 개설 성공");
        };
    });
});

app.get("/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM test1;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.post("/insertFir", (req, res) => {
    const group1join = req.body.group1join;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1join = concat(group1join, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group1join, title], (err, result) => {
        console.log('선착순 신청 성공');
    });
});

app.post("/insertDir", (req, res) => {
    const group1wait = req.body.group1wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1wait = concat(group1wait, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group1wait, title], (err, result) => {
        console.log('개설자 신청 성공');
    });
});

app.post("/updateMem", (req, res) => {
    const group1wait = req.body.group1wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1join = concat(group1join, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group1wait, title], (err, result) => {
        console.log('개설자 신청 성공');
    });
});

app.listen(port, ()=>{
})

export default router