if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}else if(process.env.NODE_ENV === 'production2'){
    module.exports = require('./prod2')
}else{
    module.exports = require('./dev')
}
