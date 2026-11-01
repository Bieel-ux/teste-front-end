import type { Product } from '../types/product';

const API_URL = '/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function fetchProducts(): Promise<Product[]> {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    return dados.products;
}