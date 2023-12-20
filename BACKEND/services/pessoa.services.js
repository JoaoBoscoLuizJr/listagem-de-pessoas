const Pessoa = requeri('../models/pessoa.js')

const pessoaService = {
    getPessoas: async () =>{
        return await Pessoa.findAll();
        
    },
    getById: async (id) =>{
        return await Pessoa.findByPk(id);
    },
    createPessoa: async (nome,sobrenome,idade) => {
        return await Pessoa.create({nome,sobrenome,idade})
    },
    updatePessoa: async ({id, nome, sobrenome, idade}) => {
        return await Pessoa.update(
            {nome,sobrenome,idade},
            {
                where: {id: id},
            }
        );
    },
    delete: async (id) =>{
        return await Pessoa.destroy({
            where: {id:id}
        })
    }
}
module.exports = pessoaService;