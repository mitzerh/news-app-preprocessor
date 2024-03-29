var express = require('express'),
    config = require(__dirname + '/config.js'),
    Helper = require(config.libDir + '/helper.js'),
    bodyParser = require('body-parser'),
    templating = require(config.libDir + '/templating.js'),
    ENV = Helper.getEnv('env'),
    PORT = (ENV === 'prod') ? 3001 : 3000,
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send('Hello..\n');
});

app.post('/process', function(req, res){

    var content = req.body,
        ret;

    res.header('Content-Type', 'application/json');

    if (content) {

        ret = getProcessed(content);

    } else {

        ret = JSON.stringify({
            success: false
        });

    }

    res.send(ret);

});

app.listen(PORT);

function getProcessed(content) {
    var processed = templating({ config: config }, JSON.stringify(content));
    return processed;
}

console.log('Listening on port '+PORT+'...');