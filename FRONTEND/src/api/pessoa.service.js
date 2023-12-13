const URL_API = `http://localhost:3000/api`

const getPessoa = async () => {
    try {
        const resposta = await fetch(`${URL_API}/pessoa`);

        if (resposta.ok) {
            throw new Error(`Falha na requisição`)
        }
        return await resposta.json();

    } catch (error) {
        throw new Error("Não foi possivel carregar os dados")

    }
}