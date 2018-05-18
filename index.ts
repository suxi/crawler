import got from 'got';
import Async from 'async'


let key = process.argv[2]
let patt = new RegExp(`<a[^<]*href="([^<"]*)"[^<]*(${key}[^<]*)`,'ig');
let links = Array<string>()

let q = Async.queue(async (page, callback) => {   
    try {
        const response = await got(`http://n2.lufi99.org/pw/thread.php?fid=22&page=${page}`,
    {timeout: 180 * 1000});
        // console.log(response.body)
        let match = patt.exec(response.body)
        while (match != null) {
            if (links.indexOf(match[1]) >= 0) {
                match = patt.exec(response.body)
                continue
            }
            links.push(match[1])
            console.log(`page ${page}: yes http://n2.lufi99.org/pw/${match[1]} ${match[2]}`)
            match = patt.exec(response.body)
        }

    } catch (error) {
        console.log(`page ${page}: ${error.code}`)
        // console.log(error.response.body); 
        //=> 'Internal server error ...'
    }
    callback();
}, 2);

(async () => {
    for (let index = 1; index < 700; index++) {
        q.push(index)
    }

})();