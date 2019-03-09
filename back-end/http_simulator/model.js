import { uuidv4 } from './uuid_generate.js';

export class EntregaModel {

    // criarEntrega(prevista_para, anotacoes, produtos, destinatario, responsavel) {
    //     this.prevista_para = prevista_para;
    //     this.anotacoes = anotacoes;
    //     this.produtos = produtos;
    //     this.destinatario = destinatario;
    //     this.responsavel = responsavel;
    // }

    static criarEntregaServidor(entrega) {
        entrega.id = uuidv4.get();
        console.log("Id Gerado: " + entrega.id);
        entrega.criada_em = new Date();
        entrega.concluida_em = null;
        entrega.entrega_concluida = false;
        console.log("Entrega Criada no Servidor");
        console.log(entrega);
        return entrega;
    }
}

export class ListaEntregasModel {

    static addEntrega(url, entrega){
        var lista_entregas = localStorage.getItem(url);
        console.log(lista_entregas);
        lista_entregas = !lista_entregas ? new Array() : JSON.parse(lista_entregas);
        console.log(lista_entregas);
        lista_entregas.push(entrega);
        return lista_entregas;
    }
}
