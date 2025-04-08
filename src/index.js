const { ServerConfig } = require('./config');
const express = require('express');
const { DatabaseConfig} = require('./config');
const apiRoutes = require('./routes');
const cors = require('cors');

DatabaseConfig.connectDB();  


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
