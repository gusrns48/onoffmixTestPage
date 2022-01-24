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

app.post("/newclass", (req,res)=>{
    const title = req.body.title;
    const contents = req.body.contents;
    const group1 = req.body.group1;
    const group2 = req.body.group2;
    const group3 = req.body.group3;
    const master = req.body.master;

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

app.post("/insertFir1", (req, res) => {
    const group1join = req.body.group1join;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1join = concat(group1join, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group1join, title], (err, result) => {
        console.log('그룹 1 선착순 신청 성공');
    });
});

app.post("/insertDir1", (req, res) => {
    const group1wait = req.body.group1wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1wait = concat(group1wait, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group1wait, title], (err, result) => {
        console.log('그룹 1 개설자 신청 성공');
    });
});

app.post("/insertFir2", (req, res) => {
    const group2join = req.body.group2join;
    const title = req.body.title;
    const sqlQuery = "update test1 set group2join = concat(group2join, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group2join, title], (err, result) => {
        console.log('그룹 2 선착순 신청 성공');
    });
});

app.post("/insertDir2", (req, res) => {
    const group2wait = req.body.group2wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group2wait = concat(group2wait, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group2wait, title], (err, result) => {
        console.log('그룹 2 개설자 신청 성공');
    });
});

app.post("/insertFir3", (req, res) => {
    const group3join = req.body.group2join;
    const title = req.body.title;
    const sqlQuery = "update test1 set group3join = concat(group3join, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group3join, title], (err, result) => {
        console.log('그룹 3 선착순 신청 성공');
    });
});

app.post("/insertDir3", (req, res) => {
    const group3wait = req.body.group3wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group3wait = concat(group3wait, (?),'/') where title = (?);";
    connection.query(sqlQuery, [group3wait, title], (err, result) => {
        console.log('그룹 3 개설자 신청 성공');
    });
});


app.post("/updateMem1", (req, res) => {
    const group1join = req.body.group1join;
    const group1wait = req.body.group1wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1join = concat(group1join, (?),'/') where title = (?);";
    const sqlQuery1 = "update test1 set group1wait = replace(group1wait, concat((?),'/'),'') where title = (?);";
    connection.query(sqlQuery, [group1join, title], (err, result) => {
        console.log('변경 성공');
    });
    connection.query(sqlQuery1, [group1wait, title], (err, result) => {
        console.log('변경 성공');
    });
});

app.post("/updateMem2", (req, res) => {
    const group2join = req.body.group2join;
    const group2wait = req.body.group2wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group2join = concat(group2join, (?),'/') where title = (?);";
    const sqlQuery1 = "update test1 set group2wait = replace(group2wait, concat((?),'/'),'') where title = (?);";
    connection.query(sqlQuery, [group2join, title], (err, result) => {
        console.log('변경 성공');
    });
    connection.query(sqlQuery1, [group2wait, title], (err, result) => {
        console.log('변경 성공');
    });
});

app.post("/updateMem3", (req, res) => {
    const group3join = req.body.group3join;
    const group3wait = req.body.group3wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group3join = concat(group3join, (?),'/') where title = (?);";
    const sqlQuery1 = "update test1 set group3wait = replace(group3wait, concat((?),'/'),'') where title = (?);";
    connection.query(sqlQuery, [group3join, title], (err, result) => {
        console.log('변경 성공');
    });
    connection.query(sqlQuery1, [group3wait, title], (err, result) => {
        console.log('변경 성공');
    });
});

app.post("/delmem1", (req, res) => {
    const group1join = req.body.group1join;
    const group1wait = req.body.group1wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group1join = replace(group1join, concat((?),'/'),' ') where title = (?);";
    const sqlQuery1 = "update test1 set group1wait = replace(group1wait, concat((?),'/'),' ') where title = (?);";
    connection.query(sqlQuery, [group1join, title], (err, result) => {
        console.log('변경 성공');
    });
    connection.query(sqlQuery1, [group1wait, title], (err, result) => {
        console.log('변경 성공');
    });
});

app.post("/delmem2", (req, res) => {
    const group2join = req.body.group2join;
    const group2wait = req.body.group2wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group2join = replace(group2join, concat((?),'/'),' ') where title = (?);";
    const sqlQuery1 = "update test1 set group2wait = replace(group2wait, concat((?),'/'),' ') where title = (?);";
    connection.query(sqlQuery, [group2join, title], (err, result) => {
        console.log('변경 성공');
    });
    connection.query(sqlQuery1, [group2wait, title], (err, result) => {
        console.log('변경 성공');
    });
});

app.post("/delmem3", (req, res) => {
    const group3join = req.body.group3join;
    const group3wait = req.body.group3wait;
    const title = req.body.title;
    const sqlQuery = "update test1 set group3join = replace(group3join, concat((?),'/'),' ') where title = (?);";
    const sqlQuery1 = "update test1 set group3wait = replace(group3wait, concat((?),'/'),' ') where title = (?);";
    connection.query(sqlQuery, [group3join, title], (err, result) => {
        console.log('변경 성공');
    });
    connection.query(sqlQuery1, [group3wait, title], (err, result) => {
        console.log('변경 성공');
    });
});

app.listen(port, ()=>{
})

export default router