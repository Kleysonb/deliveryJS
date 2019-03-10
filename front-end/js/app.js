import { EntregaModel } from '../js/model/entrega.model.js';
import { ListarEntregasView } from '../js/view/listar_entregas.view.js';
import { FormAdicionarEntregaController } from '../js/controller/form_adicionar_entrega.controller.js';

export class App {

        constructor() {
                this.entregaModel = new EntregaModel();
                this.formAdicionarEntregaController = new FormAdicionarEntregaController('#form', this);
                this.listarEntregasView = new ListarEntregasView('#form');
        }

        recuperarDadosEntregaModel() {
                this.atualizarTemplateEntregaView(this.entregaModel.getEntregas());
        }

        atualizarTemplateEntregaView(entregas) {
                console.log('Atualizando Template!');

                this.listarEntregasView.atualiza(entregas);
                this.adicionarOuvintesBotoes();
        }

        adicionarOuvintesBotoes() {
                var $btnAdd = document.querySelector('.btn-nova-entrega');
                $btnAdd.addEventListener('click', this.criarEntrega.bind(this));

                this.ouvintesBotoes('.btn-editar', this.editar.bind(this));
                this.ouvintesBotoes('.btn-apagar', this.apagar.bind(this));
                this.ouvintesBotoes('.btn-entregar', this.entregar.bind(this));
        }

        ouvintesBotoes(str, acao) {
                var $btn = document.querySelectorAll(str);
                var group = [...$btn];
                group.map($botao => $botao.addEventListener('click', () => acao($botao.id)));
        }

        editar(id) {
                console.log("Editar " + id);
                console.log(this);
        }

        apagar(id) {
                console.log("Apagar " + id);
                var desejaRemover = confirm('Tem certeza que deseja remover esta entrega?');
                if (desejaRemover) {
                        let listaEntregas = this.entregaModel.apagarEntrega(id);
                        if (listaEntregas)
                                this.atualizarTemplateEntregaView(listaEntregas);
                        else
                                alert("Não foi possível remover a entrega!");
                }
        }

        entregar(id) {
                console.log("Entregar " + id);
                let listaEntregas = this.entregaModel.concluirEntrega(id);
                if (listaEntregas)
                        this.atualizarTemplateEntregaView(listaEntregas);
                else
                        alert("Não foi possível concluir a entrega!");
        }

        criarEntrega() {
                this.formAdicionarEntregaController.carregarFormAdicionaEntregaView();
        }
}

const app = new App();
app.recuperarDadosEntregaModel();


// Adicionar Script Bootstrap caso seja necessário