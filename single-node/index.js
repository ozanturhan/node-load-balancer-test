const fs = require('fs')
const fastify = require('fastify');
let hit = 0, id

function fibonacci(limit) {
    let prev = 1n, next = 0n, swap;
    while (limit) {
        swap = prev;
        prev = prev + next;
        next = swap;
        limit--;
    }
    return next;
}

class Index {
    constructor () {
        id = Number(process.env.id)
        process.title = 'node worker '+ id
        this.webserver()
        setInterval(this.write, 5000)
    }

    write () {
        fs.writeFile(`${__dirname}/data/worker${id}.hit`, hit + "", () => {})
        fs.writeFile(`${__dirname}/data/worker${id}.mem`, Date.now()
            +' '+ JSON.stringify(process.memoryUsage())
            +'\n', { flag: 'a' }, () => {})
    }

    webserver () {
        const server = fastify();
        server.get('/', (req, reply)=> {
            if (hit++ % 100 === 0) {
                console.log('Worker', id, 'received', hit, 'requests')
            }

            const result = fibonacci(50000)
            reply.code(200)
            reply.send(`worker_${id} result: ${result}`);
        })
        server.listen(80, '0.0.0.0', ()=> {
            console.log('Worker', id, 'listening on port', 80)
        })
    }
}

new Index()