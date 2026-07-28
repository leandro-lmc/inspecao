
import express from 'express'
import InspecaoController from '../controllers/inspecao.controller.js';

import autenticacaoMiddleware from '../../../middleware/autenticacao.middleware.js';

const router = express.Router();

router.get("/inspecao/listar", autenticacaoMiddleware.autenticar, InspecaoController.ListarTodos)
router.get("/inspecao/listar/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.listarPorCodigo)
router.post("/inspecao/cadastrar", autenticacaoMiddleware.autenticar, InspecaoController.cadastrar)
router.put("/inspecao/editar/total/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.editarTotal)
router.patch("/inspecao/editar/parcial/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.editarParcial)
router.delete("/inspecao/excluir/:codigo", autenticacaoMiddleware.autenticar, InspecaoController.excluirPorCodigo)
router.delete("/inspecao/excluir", autenticacaoMiddleware.autenticar, InspecaoController.excluirTodos)

export default router
