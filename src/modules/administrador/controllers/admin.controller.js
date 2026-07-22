
import bcrypt from "bcryptjs";
import AdminModel from "..models/AdminModel.js"; 

class AdminController {
    static async cadastrar(requisicao, resposta){
        try {
            const { id, nome, email, senha } = requisicao.body
            if(!id || !nome || !email || !senha){
                return resposta.status(400).json({mensagem:"Todos os campos são obrigatórios!"})
            }
            const totalAdmin = await AdminModel.contarAdmins()
            if(totalAdmin > 0){
                return resposta.status(409).json({mensagem:"Já existe um administrador cadastrado com este email!"})
            }
            if(senha.length < 8){
                return resposta.status(403).json({mensagem:"A senha deve ter no mínimo 8 caracteres!"})
            }
            const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,32}$/
            if(!regex.test(senha)){
                return resposta.status(403).json({mensagem:"Senha invalida! Sua senha deve conter pelo menos: 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial (ex: @, #, $, %)!"})
            }
            const salt = bcrypt.genSaltSync(10);
            const hashSenha = bcrypt.hashSync(senha, salt);
            const admin = await AdminModel.cadastrar(id, nome, email, senha=hashSenha)
            return resposta.status(201).json({mensagem:"Usuário administrador cadastrado com sucesso!"})

        } catch(error){
            return resposta.status(500).json({mensagem:"Erro ao cadastrar administrador!", erro:error.message})             
        }
    }
}