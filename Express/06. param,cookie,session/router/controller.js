var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    app.get("/", function(req, res) {
        
        
        res.render("index.ejs");
    })

    app.get("/param", function(req, res) {
        var renderData = {
            data1: req.query.data1,
            data2: req.query.data2
        };
        
        res.render("param.ejs", renderData);
    })

    app.post("/param", urlencodedParser, function(req, res) {
        var renderData = {
            data1: req.body.data1,
            data2: req.body.data2
        };

        res.render("param.ejs", renderData);
    })

    //쿠키
    app.get("/save_cookie", function(req, res) {
        var op = {
            maxAge : 24 * 60 * 60
        }

        res.cookie("cookie1", "aaa", op);
        res.render("save_cookie.ejs");
    })
    app.get("/load_cookie", function(req, res) {
        var renderData = {
            cookie1 : req.cookies.cookie1
        }

        res.render("load_cookie.ejs", renderData);
    })

    //세션
    app.get("/save_session", function(req, res) {
        req.session.session1 = "test";

        res.render("save_session.ejs");
    })
    app.get("/load_session", function(req, res) {
        var renderData = {
            session1 : req.session.session1
        }

        res.render("load_session.ejs", renderData);
    })
}