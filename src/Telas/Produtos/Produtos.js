export default function Produtos(){
    return(
    <div>
        <h1>Página de Produtos</h1>
        <form>
            <label>Descrição do Produto</label>
            <input name="nome"/>
            <br/>
            <label>Valor do Item</label>
            <input name="valorVenda" type="number" step="0.01"/>
            <br/>
            <lable>Código do Item</lable>
            <input name="codigoBarras" type="text"/>
            <br/>
            <label>Estoque</label>
            <input name="estoque" type="number"/>
            <br/>
            <button>Cadastrar Produto</button>
        </form>

        <br/>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Valor do Item</th>
                    <th>Código do Item</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Livro Encantado: Remendo</td>
                    <td>30 Esmeraldas + 1 livro</td>
                    <td>7896541238</td>
                    <td>4</td>
                    <td>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}