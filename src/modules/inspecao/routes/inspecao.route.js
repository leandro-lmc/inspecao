
import express from 'express'
import InspecaoController from '../controllers/inspecao.controller.js';

import autenticacaoMiddleware from '../../../middleware/autenticacao.middleware.js';

const router = express.Router();

router.get("/listar", autenticacaoMiddleware.autenticar, InspecaoController.ListarTodos)
router.get("/listar/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.listarPorCodigo)
router.post("/cadastrar", autenticacaoMiddleware.autenticar, InspecaoController.cadastrar)
router.put("/editar/total/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.editarTotal)
router.patch("/editar/parcial/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.editarParcial)
router.delete("/excluir/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.excluirPorCodigo)
router.delete("/excluir", autenticacaoMiddleware.autenticar, InspecaoController.excluirTodos)

export default router
