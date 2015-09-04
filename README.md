# News App JSON Preprocessor

A preprocessor application for generating the iOS News App's `article.json` file using [node](https://nodejs.org/).

More details found on the [Wiki](https://github.com/mitzerh/news-app-preprocessor/wiki).

---


### Arguments

* `--src` The folder path where the `process.json` is found

* `--dest` (Optional) Output folder where to put the processed `article.json`. Default uses the same source folder

* `--modules` (Optional) Path to custom modules. Default uses `src/modules/`


_Example:_

```
node app.js --src=src/examples/aritcle-with-photo/ --dest=/www/output/article-with-photo/
```

### Node server

You can run the node server version to process the requests via cURL. Defaults to port 3000.

```
# run server
node server.js
```

_Example:_

```
curl -i -X POST -H 'Content-Type: application/json' -d @process.json http://localhost:3000/process
```
