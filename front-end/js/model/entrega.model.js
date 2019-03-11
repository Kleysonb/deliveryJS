import { BaseService } from '../services/base.sevice.js';

/**
 * Ele é responsável pela leitura e escrita de dados, 
 * e também de suas validações.
*/

export class EntregaModel extends BaseService {

    constructor() {
        super('entregas');
    }

    criarEntrega(prevista_para, anotacoes, produtos, destinatario, responsavel) {
        this.prevista_para = prevista_para;
        this.anotacoes = anotacoes;
        this.produtos = produtos;
        this.destinatario = destinatario;
        this.responsavel = responsavel;
    }

    // ----------- Comunicação com o Servidor ----------- //

    getEntregas() {
        return super.readAll();
    }

    addEntrega(entrega) {
        super.create(entrega);
    }

    apagarEntrega(id) {
        return super.delete(id);
    }

    concluirEntrega(id) {
        return super.getPersonalizado('concluirEntrega', id);
    }

    atualizarEntrega(id, instance){
        super.update(id, instance);
    }

}

export class Produtos {
    constructor(nome, quantidade, unidade_medida, anotacoes) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.unidade_medida = unidade_medida;
        this.anotacoes = anotacoes;
        this.entregue = false;
    }
}