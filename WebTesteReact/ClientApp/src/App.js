import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchProduto } from './components/FetchProduto';
import { AddProduto } from './components/AddProduto';
import { FetchIngrediente } from './components/FetchIngrediente';
import { AddIngrediente } from './components/AddIngrediente'
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/fetch-produto' component={FetchProduto} />
                <Route path='/add-produto' component={AddProduto} />
                <Route path='/produto/edit/:id' component={AddProduto} />

                <Route path='/fetch-ingrediente' component={FetchIngrediente} />
                <Route path='/add-ingrediente' component={AddIngrediente} />
                <Route path='/ingrediente/edit/:id' component={AddIngrediente} />
            </Layout>
        );
    }
}
