var express = require('express')
var app = express()
var expressHandlebars = require('express-handlebars')

// Configure Express App
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use('/style', express.static(__dirname + '/node_modules/bootstrap/dist/'))

// Router Logic
app.get('/', function(req, res) {
    res.render('home')
})

function startServer(port) {
    app.listen(3000, function() {
        console.log('Server started, listening on port ' + port)
    })
}

startServer(3000)

