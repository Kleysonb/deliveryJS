import { EntregaModel } from '../js/model/entrega.model.js';
import { ListarEntregasView } from '../js/view/listar_entregas.view.js';

export class App {

        static recuperarDadosEntregaModel() {
                let entrega = new EntregaModel();
                entrega.getEntregas().then(
                        entregas => {
                                this.atualizarTemplateEntregaView(entregas);
                        }
                ).catch(
                        error => {
                                console.log(error)
                        }
                );
        }

        static atualizarTemplateEntregaView(entregas) {
                let listar_entregas = new ListarEntregasView('#card');
                listar_entregas.atualiza(entregas);
                // console.log(entregas);
        }
}

App.recuperarDadosEntregaModel();



// Adicionar Script Bootstrap caso seja necessário