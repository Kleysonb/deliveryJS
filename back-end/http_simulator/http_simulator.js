import { EntregaModel, ListaEntregasModel } from './model.js';

export class HttpSimulator {

    post(url, instance) {
        let urlAux = url.split('/');
        if (urlAux.length > 3) {
            // switch (urlAux[3]) {
            //     case 'concluirEntrega':
            //         this.concluirEntrega(urlAux);
            //         break;
            // }
        } else {
            this.adicionarNovaEntrega(url, instance);
        }
    }

    concluirEntrega(urlAux) {
        let urlListaEntregas = urlAux.slice(0, 3).join('/');
        let listaEntregas = this.get(urlListaEntregas);
        let entrega = listaEntregas.find(entrega => entrega.id === urlAux[4]);
        if(entrega){
            EntregaModel.concluirEntregaServidor(entrega);
            return this.update(urlListaEntregas, listaEntregas);
        }
    }

    adicionarNovaEntrega(url, instance) {
        let novaEntrega = EntregaModel.criarEntregaServidor(instance);
        let listaEntregas = ListaEntregasModel.addEntrega(url, novaEntrega);
        this.update(url, listaEntregas);
        alert("Entrega Adicionada Com Sucesso!");
    }

    get(url) {
        let urlAux = url.split('/');
        if (urlAux.length > 3) {
            switch (urlAux[3]) {
                case 'concluirEntrega':
                    return this.concluirEntrega(urlAux);
            }
        } else {
            let listaEntregas = localStorage.getItem(url);
            return !listaEntregas ? [] : JSON.parse(listaEntregas);
        }
    }

    getInstance(url, position = false) {
        // deliveryJS/back-end/entregas/fef545f4e54f5e4
        let urlAux = url.split('/');
        let id = urlAux.pop();
        urlAux = urlAux.join('/');
        let listaEntregas = this.get(urlAux);
        let entrega = listaEntregas.find(entrega => entrega.id === id);
        if (position) {
            return [listaEntregas.indexOf(entrega), listaEntregas, urlAux];
        } else {
            return entrega ? entrega : undefined;
        }
    }

    put(url, instance) {

    }

    delete(url) {
        let info = this.getInstance(url, true);
        if (info[0] >= 0) {
            info[1].splice(info[0], 1);
            console.log('Entrega Removida do Servidor');
            this.update(info[2], info[1]);
            return info[1];
        } else {
            return null;
        }
    }

    update(url, instance) {
        localStorage.setItem(url, JSON.stringify(instance));
        console.log('Update Server');
        return instance;
    }

}