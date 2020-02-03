const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function rememberMiddleware(req, res, next) {
    next()
    
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        let usuarioALoguearse
        for (let i = 0; i < users.length; i++) {
            if (req.cookies.recordame.email == users[i].email){
                usuarioALoguearse = users[i]
                break; 
            }
        }
        req.session.usuarioLogueado = usuarioALoguearse
    }
}

module.exports = rememberMiddleware