module.exports = (function () {
    var express = require("express")
    var router = express.Router();

    function loadExhibits(res, mysql, context, complete) {
        mysql.pool.query("SELECT exhibit_id, type, size, animal_capacity FROM Exhibits",
        function (err, results, fields) {
            if (err) {
                res.write(JSON.stringify(error));
                res.end();
            }
            context.exhibits = results;
            complete();
        })
    };
    
    router.get("/Exhibits", function (req, res) {
        var callbackCount = 0
        var context = {}
        var mysql = req.app.get('mysql');
        loadExhibits(res, mysql, context, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.send(context.exhibits);
            }
        }
    });

    router.post('/add', function (req, res) {
        console.log(req.body);
        var mysql = req.app.get("mysql");
        const exhibitInsert = "INSERT INTO Exhibits (type, size, animal_capacity) VALUES (?, ?, ?)";
        mysql.pool.query(
            exhibitInsert,
            [req.body.type, req.body.size, req.body.animal_capacity],
            (err, result, fields) => {
                if (err) {
                    console.log(err)
                    res.send(err);
                }
                if (result) {
                    res.send(result);
                }
                if (fields) {
                    res.send(fields);
                }
            }
        )
    });

    return router

})();


