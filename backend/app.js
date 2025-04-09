const express = require('express');
const app = express();
const PORT = 4444;
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(
    origin = 'http://localhost:5173',
));

app.use('/auth', require('./routes/auth.route'));
app.use('/labour', require('./routes/labour.route'));
app.use("/contractor", require('./routes/contractor.route'));


try {
    dbConnect();
    app.listen(PORT, () => {
        console.log('http://localhost:' + PORT)
    })
}
catch (error) {
    console.log(error);
}