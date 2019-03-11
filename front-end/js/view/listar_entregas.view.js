import { View } from './view.js';

export class ListarEntregasView extends View {

    constructor(seletor) {
        super(seletor);
    }

    getTemplate(model) {
        if(model.length === 0){
            return `<h5>Você não possui nenhuma entrega!</h5>
            <div class="botao-nova-entrega">
                <button type="button" class="btn btn-nova-entrega btn-light">Adicionar Nova Entrega</button>
            </div>
            `
        }
        return `${model.map(
            entrega => 
                `<div class="card card-centro">
                    <div class="card-body">
                        <h5 class="card-title">Destinatário: ${ entrega.destinatario.nome }</h5>
                        <p class="card-text">Entregador: ${ entrega.responsavel.nome }</p>
                        <div class="card card-extra">
                            <ul class="list-group list-group-flush">
                                ${entrega.produtos.map(produto =>
                                    `<li class="list-group-item ${ produto.entregue ? "produto-entregue" : "produto-nao-entregue" }">
                                        ${ produto.nome }, ${ produto.quantidade } ${ produto.quantidade > 1 ? produto.unidade_medida+"s" : produto.unidade_medida }
                                    </li>`
                                ).join('')}
                            </ul>
                        </div>
                        <h6 class="card-subtitle mb-2 text-muted criado-em">Criada em: ${ entrega.criada_em }</h6>
                        <p class="card-text"> ${ entrega.anotacoes } </p>
                        <div class="grupo-button">
                            <button type="button" id="${ entrega.id }" class="btn-editar btn btn-primary float-left">Editar</button>
                            <button type="button" id="${ entrega.id }" class="btn-apagar btn btn-danger float-left">Apagar</button>
                            <button type="button" id="${ entrega.id }" class="btn-entregar btn btn-success float-right">Concluir Entrega</button>
                        </div>
                    </div>
                </div>`
            )}
            
            <div class="botao-nova-entrega">
                <button type="button" class="btn btn-nova-entrega btn-light">Adicionar Nova Entrega</button>
            </div>
            
            `;
    }

    isPlural(quantidade){
        return quantidade > 1 ? "s" : "";
    }

    atualiza(model) {
        // console.log(model);
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}