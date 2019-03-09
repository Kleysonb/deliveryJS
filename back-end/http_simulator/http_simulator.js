import { EntregaModel, ListaEntregasModel } from './model.js';

export class HttpSimulator {

    post(url, instance) {
        let novaEntrega = EntregaModel.criarEntregaServidor(instance);
        let listaEntregas = ListaEntregasModel.addEntrega(url, novaEntrega);
        localStorage.setItem(url, JSON.stringify(listaEntregas));
    }

    get(url) {
        let listaEntregas = localStorage.getItem(url);
        return !listaEntregas ? [] : JSON.parse(listaEntregas);
    }

    put(url, instance) {

    }

    delete(url) {

    }

}