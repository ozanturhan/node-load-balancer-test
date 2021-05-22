const os = require('os')
const fs = require('fs')
const cluster = require('cluster')
let Worker = require('./worker')

class Cluster {
    constructor () {
        if (cluster.isMaster) {
            process.title = 'node master'
            setInterval(this.write, 5000)
            this.fork()
        }
        else {
            new Worker()
        }
    }

    write () {
        fs.writeFile(`${__dirname}/data/master.mem`, Date.now()
            +' '+ JSON.stringify(process.memoryUsage()) +'\n', { flag: 'a' }, () => {})

        fs.writeFile(`${__dirname}/data/master.cpu`, Date.now()
            +' '+ JSON.stringify(os.loadavg()) +'\n', { flag: 'a' }, () => {})
    }

    fork () {
        let cpus = os.cpus().length

        for (let i = 0; i < cpus; i++) {
            cluster.fork({id: i})
        }
    }
}

new Cluster()