module.exports = function(app) {
    app.get("/", function(req, res) {
        var date = new Date();

        var renderData = {
            str : "문자열",
            num : 100,
            date : date
        }

        res.render("index.ejs", renderData);
    })
    app.get("/test", function(req, res) {
        res.render("test.ejs");
    })
}