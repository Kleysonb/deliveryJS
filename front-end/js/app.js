import { EntregaModel } from '../js/model/entrega.model.js';
import { ListarEntregasView } from '../js/view/listar_entregas.view.js';
import { FormEntregaController } from '../js/controller/form_adicionar_entrega.controller.js';

export class App {

        constructor() {
                this.entregaModel = new EntregaModel();
                this.formEntregaController = new FormEntregaController('#form', this);
                this.listarEntregasView = new ListarEntregasView('#form');
        }

        adicionarOuvintesBotoesMenu() {
                let $nav = document.querySelector('.menu');

                document.querySelector('.logo').addEventListener('click', () => {
                        $nav.querySelector('.selecionada').classList.remove('selecionada');
                        $nav.querySelector('[inicial]').setAttribute('class', 'selecionada');
                        // console.log($nav.querySelector('[inicial]'));
                });

                let $liItens = $nav.querySelectorAll('li');
                $liItens.forEach(item => {
                        item.addEventListener('click', () => {
                                $nav.querySelector('.selecionada').classList.remove('selecionada');
                                let $link = item.querySelector('a');
                                $link.setAttribute('class', 'selecionada');
                        });
                });
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
                let entregas = this.entregaModel.getEntregas();
                let entrega = entregas.find(entrega => entrega.id === id);
                if (entrega) {
                        this.formEntregaController.carregarFormEditarEntregaView(entrega);
                } else {
                        alert("Não foi possível editar esta entrega!");
                }
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
                this.formEntregaController.carregarFormAdicionaEntregaView();
        }
}

const app = new App();
app.adicionarOuvintesBotoesMenu();
app.recuperarDadosEntregaModel();

// Adicionar Script Bootstrap caso seja necessário