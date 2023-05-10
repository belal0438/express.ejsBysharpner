
// const products = [];
// module.exports = class Product {
//     constructor(t) {
//         this.title = t;
//     }
//     save() {
//         products.push(this);
//     }
//     static fetchAll() {
//         return products;
//     }
// }


// ////now save in file not in array

// const fs = require('fs')
// const path = require('path')


// module.exports = class Product {
//     constructor(t) {
//         this.title = t;
//     }
//     save() {
//         const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

//         fs.readFile(p, (err, fileCotent) => {
//             let products = [];
//             if (!err) {
//                 products = JSON.parse(fileCotent);
//             }

//             products.push(this);
//             fs.writeFile(p, JSON.stringify(products), (err) => {
//                 console.log(err);
//             })

//         });

//     }
//     static fetchAll(cb) {
//         const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

//         fs.readFile(p, (err, fileCotent) => {
//             if (err) {
//                 cb([])
//             }
//             cb(JSON.parse(fileCotent));
//         });

//     }
// }







// modify oure code

const fs = require('fs')
const path = require('path')
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductFromFile = cb => {

    fs.readFile(p, (err, fileCotent) => {
        if (err) {
            return cb([])
        } else {
            cb(JSON.parse(fileCotent));
        }

    });
}


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        getProductFromFile(product => {
            product.push(this);
            fs.writeFile(p, JSON.stringify(product), (err) => {
                console.log(err);
            })
        })
    }
    static fetchAll(cb) {
        getProductFromFile(cb);

    }
}