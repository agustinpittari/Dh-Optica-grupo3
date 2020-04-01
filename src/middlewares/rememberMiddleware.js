const db = require('../database/models')

function rememberMiddleware(req, res, next) {
    next()
    
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        let usuarioALoguearse
        for (let i = 0; i < db.usuarios.length; i++) {
            if (req.cookies.recordame.email == db.usuarios[i].email){
                usuarioALoguearse = db.usuarios[i]
                break; 
            }
        }
        req.session.usuarioLogueado = usuarioALoguearse
    }
}

module.exports = rememberMiddleware