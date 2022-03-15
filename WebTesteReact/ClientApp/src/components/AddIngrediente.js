import React, { Component } from 'react';

export class Ingrediente {
    constructor() {
        this.id = 0;
        this.valor = 0;
        this.nome = "";
    }
}

export class AddIngrediente extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", ingrediente: new Ingrediente(), loading: true };
        this.intialize();

        this.handleSalve = this.handleSalve.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Ingredientes/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", ingrediente: data, loading: false });
        }
        else {

            this.state = { title: "Create", ingrediente: new Ingrediente(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Ingrediente</h3>
                {contents}
            </div>
        );
    }


    handleSalve(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.ingrediente.id) {
            const response1 = fetch('api/Ingredientes/' + this.state.ingrediente.id, { method: 'PUT', body: data });
            this.props.history.push('/fetch-ingrediente');
        }
        else {
            const response2 = fetch('api/Ingredientes/', { method: 'POST', body: data });
            this.props.history.push('/fetch-ingrediente');
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/fetch-ingrediente');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalve}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.ingrediente.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="nome" placeholder="Nome Ingrediente" defaultValue={this.state.ingrediente.nome} required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-2">
                        <input className="form-control" type="text" name="valor" placeholder="Valor" defaultValue={this.state.ingrediente.valor} required />
                    </div>
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.ingrediente.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form>

        );
    }

}


