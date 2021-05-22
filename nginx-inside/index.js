const os = require('os')
const fs = require('fs')
const cp = require('child_process')

class Nginx {
    constructor () {
        process.title = 'node  master'
        setInterval(this.write, 5000)
        this.fork()
    }

    write () {
        fs.writeFile(`${__dirname}/data/master.mem`, Date.now()
            +' '+ JSON.stringify(process.memoryUsage()) +'\n', { flag: 'a' }, () => {})

        fs.writeFile(`${__dirname}/data/master.cpu`, Date.now()
            +' '+ JSON.stringify(os.loadavg()) +'\n', { flag: 'a' }, () => {})
    }

    fork () {
        let cpus = os.cpus().length
        // let cpus = 10;

        for (let i = 0; i < cpus; i++) {
            cp.fork(`${__dirname}/worker.js`, {env: {id: i}})
        }
    }
}

new Nginx()