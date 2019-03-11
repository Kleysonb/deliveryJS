import { uuidv4 } from './uuid_generate.js';

export class EntregaModel {

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

    static concluirEntregaServidor(entrega) {
        console.log("Concluindo entrega no servidor");
        entrega.concluida_em = new Date();
        entrega.entrega_concluida = true;
        entrega.produtos.map(produto => produto.entregue = true);
    }

    static atualizarEntrega(entregaAntiga, novaEntrega) {
        console.log("Atualizando entrega no servidor");
        entregaAntiga.prevista_para = novaEntrega.prevista_para;
        entregaAntiga.anotacoes = novaEntrega.anotacoes;
        // entregaAntiga.produtos = novaEntrega.produtos;
        entregaAntiga.destinatario = novaEntrega.destinatario;
        entregaAntiga.responsavel = novaEntrega.responsavel;
    }
}

export class ListaEntregasModel {

    static addEntrega(url, entrega) {
        var lista_entregas = localStorage.getItem(url);
        console.log(lista_entregas);
        lista_entregas = !lista_entregas ? new Array() : JSON.parse(lista_entregas);
        console.log(lista_entregas);
        lista_entregas.push(entrega);
        return lista_entregas;
    }
}
