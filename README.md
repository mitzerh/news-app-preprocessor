# News App JSON Preprocessor

A preprocessor application for generating the iOS News App's `article.json` file using [GruntJS](http://gruntjs.com/).

---


### Arguments

* `--src` The folder of the news bundle

* `--dest` Output folder of the bundle

* `--modules` (Optional) Path to custom modules. Default uses `src/modules/`


_Example:_

```
grunt --src=src/examples/aritcle-with-photo/ --dest=/www/output/article-with-photo/
```

### Node server

You can run the node server version to process the requests via cURL

```
# run server
npm server.js
```

_Example:_

```
curl -i -X POST -H 'Content-Type: application/json' -d @generator.json http://localhost:3000/generator
```
