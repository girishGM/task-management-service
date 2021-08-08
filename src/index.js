const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const {join} = require('path');
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const taskRouter = require('./routes/tasks');
const dashboardRouter = require('./routes/dashboard');

const adapter = new FileSync(join(__dirname,'..','db.json'));
const db = low(adapter);
db.defaults({ tasks:[] }).write();    
const app = express();
const PORT = process.env.PORT || 4000;

// app configs.
app.db = db;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());
app.use('/tasks',taskRouter);
app.use('/dashboard',dashboardRouter);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

//initialize the app.
async function initialize(){    
    app.listen(PORT);
};

initialize()
    .finally(
        () => console.log(`app started on port:${PORT}`)
    );