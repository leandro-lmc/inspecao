import conexao from "../../../config/database.js";

class AdminModel {
  static async cadastrar(nome, email, senha) {
    const dados = [nome, email, senha];
    const query = `INSERT INTO admins (nome, email, senha) VALUES ($1, $2, $3) returning *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
  static async contarAdmins() {
    const query = `select count (*) FROM admins`;
    const resultado = await conexao.query(query);
    return Number(resultado.rows[0].count);
  }
  static async verificarAdminAtivo(){
    const query = `select count(*) from admins where ativo = true`;
    const resultado = await conexao.query(query);
    return (resultado.rows[0].count)
  }

  static async buscarPorEmail(email) {
    const dados = [email];
    const query = `select id, nome, email, senha, ativo from admins where email = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];
  }
  static async buscarPorId(id) {
    const dados = [id];
    const query = `select id, nome, email from admins where id  = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];
  }
}
export default AdminModel;
