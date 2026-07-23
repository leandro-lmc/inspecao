import conexao from "../../../config/database.js";

class AdminModel {
  static async cadastrar(id, nome, email, senha) {
    const dados = [id, nome, email, senha];
    const query = `INSERT INTO admins (id, nome, email, senha) VALUES ($1, $2, $3, $4) returning *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
  static async contarAdmins() {
    const query = `select count (*) FROM admins`;
    const resultado = await conexao.query(query);
    return Number(resultado.rows);
  }
  static async buscarPorEmail() {
    const dados = [email];
    const query = `select * from admins where email = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
}
export default AdminModel;
