const cluster = require('cluster');
const numberOfCPUs = require('os').cpus().length;

const app = require('./app');
const port = process.env.PORT || 3000;

if(cluster.isMaster){
    console.log(numberOfCPUs);
    for(let i = 0;i<numberOfCPUs;i++){
        cluster.fork();
    }
}
else{
    app.listen(port, () => {
        console.log('Application is running');
    });
}

