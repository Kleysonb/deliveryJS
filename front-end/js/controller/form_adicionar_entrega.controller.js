import { FormAdicionarEntregaView } from '../view/form_adicionar_entrega.view.js';
import { EntregaModel } from '../model/entrega.model.js';

export class FormAdicionarEntregaController {

    constructor($strDiv, homePage) {
        this.formAdicionarEntregaView = new FormAdicionarEntregaView($strDiv);
        this.homePage = homePage;
    }

    carregarFormAdicionaEntregaView() {
        this.formAdicionarEntregaView.atualiza();
        this.adicionarOuvintesBotoes();
        this.adicionarOuvintesInputs();
    }

    adicionarOuvintesBotoes() {
        let $btnSave = document.getElementById('btn-save');
        $btnSave.addEventListener('click', this.save.bind(this));

        let $btnCancel = document.querySelector('.btn-cancel');
        $btnCancel.addEventListener('click', this.retonar.bind(this));
    }

    adicionarOuvintesInputs() {
        this.$destinatario = document.getElementById('destinatario');
        this.$responsavel = document.getElementById('responsavel');
        this.$produtos = document.getElementById('produtos');
        this.$dataprevista = document.getElementById('dataprevista');
        this.$anotacoes = document.getElementById('anotacoes');
    }

    getProdutos(qtd) {
        const produtos = [
            {
                "nome": "Cimento Ciplan",
                "quantidade": 10,
                "unidade_medida": "Unidade",
                "anotacoes": "Nenhuma Anotação",
                "entregue": false
            },
            {
                "nome": "Areia",
                "quantidade": 1,
                "unidade_medida": "Metro",
                "anotacoes": "Nenhuma Anotação",
                "entregue": false
            },
            {
                "nome": "Tijolo",
                "quantidade": 1000,
                "unidade_medida": "Unidade",
                "anotacoes": "Nenhuma Anotação",
                "entregue": false
            }
        ];
        var arr = 0;
        let listaProdutos = [];
        while (arr < qtd) {
            listaProdutos.push(produtos[Number.parseInt(Math.random() * produtos.length)]);
            arr++;
        }
        return listaProdutos;
    }

    getDestinatario(nome) {
        return {
            "nome": nome,
            "telefone": "99999999999",
            "endereco": {
                "cep": "65918309",
                "endereco": "Rua Sessenta e Seis",
                "numero": "427",
                "bairro": "Vila Vitória",
                "cidade": "Imperatriz",
                "estado": "MA",
                "complemento": ""
            }
        };
    }

    getResponsavel(nome) {
        return {
            "nome": nome,
            "telefone": "99999999999"
        };
    }

    save() {
        const entrega = {
            prevista_para: this.$dataprevista.value,
            anotacoes: this.$anotacoes.value,
            produtos: this.getProdutos(Number.parseInt(this.$produtos.value)),
            destinatario: this.getDestinatario(this.$destinatario.value),
            responsavel: this.getResponsavel(this.$responsavel.value)
        };

        let novaEntrega = new EntregaModel();

        novaEntrega.criarEntrega(entrega.prevista_para, entrega.anotacoes, entrega.produtos,
            entrega.destinatario, entrega.responsavel);
        novaEntrega.addEntrega(novaEntrega);


        console.log("Save data!");
        this.retonar();
    }

    retonar() {
        console.log("Retornar Page Home");
        this.homePage.recuperarDadosEntregaModel();
    }
}