if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}else if(process.env.NODE_ENV === 'production3'){
    module.exports = require('./prod3')
}else{
    module.exports = require('./dev')
}
