import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchIngrediente extends Component {
    static displayName = "Ingredientes";

    constructor() {
        super();
        this.state = { ingredientes: [], loading: true }
    }

    componentDidMount() {
        this.populaIngredienteData();
    }

    static handleEdit(id) {
        window.location.href = "/ingrediente/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar o ingrediente : " + id)) {
            return;
        }
        else {
            fetch('api/ingredientes/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-ingrediente";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderIngredientesTabela(ingredientes) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredientes.map(ingr =>
                        <tr key={ingr.id}>
                            <td>{ingr.id}</td>
                            <td>{ingr.nome}</td>
                            <td>{ingr.valor}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(ingr.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(ingr.id)}>Delete</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : FetchIngrediente.renderIngredientesTabela(this.state.Ingredientes);

        return (
            <div>
                <h1 id="tabelLabel" >Ingredientes</h1>
                <p>Tela de Listagem de Ingredientes</p>
                <p>
                    <Link to="/add-ingrediente">Cadastrar Ingrediente</Link>
                </p>
                {contents}
            </div>
        );
    }


    async populaIngredienteData() {
        const response = await fetch('api/Ingredientes');
        const data = await response.json();
        this.setState({ Ingredientes: data, loading: false });
    }

}