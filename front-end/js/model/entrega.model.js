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

    //prevista_para
    //anotacoes
    //produtos
    //destinatario
    //responsavel

    // setPrevistaPara(date) {
    //     this.prevista_para = date;
    // }

    // setResponsavel(responsavel) {
    //     this.responsavel = responsavel;
    // }

    // setAnotacoes(anotacoes) {
    //     this.anotacoes = anotacoes;
    // }

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
        // console.log("Concluir entrega model")
        return super.getPersonalizado('concluirEntrega', id);
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