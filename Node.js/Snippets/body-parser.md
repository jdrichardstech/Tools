#body-parser
**npm package handles HTTP POST requests by extracting the entire body portion of an incoming request and stream and exposing it to req.body**

Install:
&nbsp;`npm i -s body-parser`

Add to main node file:
&nbsp;`const bodyParser = require('body-parser')

&nbsp;`app.use(bodyParser.urlencoded({ extended: false }));`<br /><br />
&nbsp;`app.use(bodyParser.json());`
