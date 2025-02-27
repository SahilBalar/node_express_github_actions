var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname));

//http://localhost:3000/
app.get('/', function (req, res) {
    res.redirect('index.html')
})

app.get('/name', function (req, res) {
    res.send("<h1>C0864336 sahil balar</h1>")
})

app.get('/profile', (req, res) => {
  const data = {
        name: "Sahil balar",
        id: "c0864336", 
        email: "balarsahil21@gmail.com" 
    };
  res.json(data);
})

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.send('Admin Homepage')
})

//http://localhost:3000/user/100
app.get("/user/:id", (req, res)=> {
      res.send(`User ID: ${req.params.id}`);
    }
)

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});
  
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})
