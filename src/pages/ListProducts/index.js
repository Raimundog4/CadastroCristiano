import React from 'react';
import Header from '../../components/Header';
import './styles.css';


const ListProducts = () => {
    let produtos = localStorage.getItem('produtos')
    if (produtos === null) {
        return <h1>Nenhum produto cadastrado!</h1>
    } else {
        produtos = JSON.parse(produtos)
        console.log(produtos)
        return (
            <>
                <Header />
                <div className="container">
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
    
                            <tbody>
                                {produtos.map(produto => {
                               return (
                                    <tr key={produto.id}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>R${produto.valor}</td>
                                </tr>
                               )
                               
                                })}
                                    
                                    
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );  
    }
   
};

export default ListProducts;