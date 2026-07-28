import express from 'express'  
import AdminController from '../controllers/admin.controller.js' 
import autenticacaoMiddleware from '../../../middleware/autenticacao.middleware.js';

const routerAdmin = express.Router();

routerAdmin.post('/cadastrar', AdminController.cadastrar)
routerAdmin.post('/login', AdminController.login)
// rota privada
routerAdmin.get('/perfil/:email', autenticacaoMiddleware.autenticar, AdminController.perfil)


export default routerAdmin




