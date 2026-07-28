import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class autenticacaoMiddleware {
  static autenticar(requisicao, resposta, proximo) {
    const authheader = requisicao.headers["authorization"];
    const token = authheader && authheader.split(" ")[1];
    if (!token) {
      return resposta.status(401).json({ mensagem: "Token não fornecido!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (erro, usuario) => {
      if (erro) {
        return resposta.status(403).json({ mensagem: "Token não autorizado!" });
      }
      requisicao.usuario = usuario;
      proximo();
    });
  }
}

export default autenticacaoMiddleware