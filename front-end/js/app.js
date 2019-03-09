import { EntregaModel } from '../js/model/entrega.model.js';
import { ListarEntregasView } from '../js/view/listar_entregas.view.js';
import { HttpSimulator } from '../../back-end/http_simulator/http_simulator.js';

export class App {

        static recuperarDadosEntregaModel() {
                let entrega = new EntregaModel();
                this.atualizarTemplateEntregaView(entrega.getEntregas());
                // entrega.getEntregas().then(
                //         entregas => {
                //                 this.atualizarTemplateEntregaView(entregas);
                //                 // this.criarEntrega(entregas[0]);
                //                 // this.criarEntrega(entregas[1]);
                //         }
                // ).catch(
                //         error => {
                //                 console.log(error)
                //         }
                // );
        }

        static atualizarTemplateEntregaView(entregas) {
                let listar_entregas = new ListarEntregasView('#card');
                listar_entregas.atualiza(entregas);
                this.adicionarOuvintesBotoes();
        }

        static adicionarOuvintesBotoes() {
                this.ouvintesBotoes('.btn-editar', this.editar);
                this.ouvintesBotoes('.btn-apagar', this.apagar);
                this.ouvintesBotoes('.btn-entregar', this.entregar);
        }

        static ouvintesBotoes(str, acao) {
                var btn = document.querySelectorAll(str);
                var group = [...btn];
                group.map(botao => {
                        botao.addEventListener('click', () => {
                                acao(botao.id);
                        });
                });
        }

        static editar(id) {
                console.log("Editar " + id)
        }

        static apagar(id) {
                console.log("Apagar " + id)
        }

        static entregar(id) {
                console.log("Entregar " + id)
        }

        static criarEntrega(entrega) {
                console.log(entrega);
                let novaEntrega = new EntregaModel();

                delete novaEntrega.extensaoURL;
                delete novaEntrega.baseURL;
                delete novaEntrega.http;
                
                novaEntrega.criarEntrega(entrega.prevista_para, entrega.anotacoes, entrega.produtos,
                        entrega.destinatario, entrega.responsavel);
                const http = new HttpSimulator();
                http.post('deliveryJS/back-end/entregas', novaEntrega);
        }
}

App.recuperarDadosEntregaModel();


// Adicionar Script Bootstrap caso seja necessário