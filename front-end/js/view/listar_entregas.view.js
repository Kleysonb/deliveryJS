import { View } from './view.js';

export class ListarEntregasView extends View {

    constructor(seletor) {
        super(seletor);
    }

    getTemplate(model) {

        return `${model.map(
            entrega => 
                `<div class="card card-centro">
                    <div class="card-body">
                        <h5 class="card-title">Destinatário: ${ entrega.destinatario.nome }</h5>
                        <p class="card-text">Entregador: ${ entrega.responsavel.nome }</p>
                        <div class="card card-extra">
                            <ul class="list-group list-group-flush">
                                ${entrega.produtos.map(produto =>
                                    `<li class="list-group-item">
                                        ${ produto.nome }, ${ produto.quantidade } ${ produto.quantidade > 1 ? produto.unidade_medida+"s" : produto.unidade_medida }
                                    </li>`
                                ).join('')}
                            </ul>
                        </div>
                        <h6 class="card-subtitle mb-2 text-muted criado-em">Criada em: ${ entrega.criada_em }</h6>
                        <p class="card-text"> ${ entrega.anotacoes } </p>
                        <div class="grupo-button">
                            <button type="button" class="btn btn-primary float-left">Editar</button>
                            <button type="button" class="btn btn-danger float-left">Apagar</button>
                            <button type="button" class="btn btn-success float-right">Entrega Feita</button>
                        </div>
                    </div>
                </div>`
            )}`;

        // `<div class="card card-centro">
        //     <div class="card-body">
        //         <div class="card card-extra">
        //             <ul class="list-group list-group-flush">
        //                 <li class="list-group-item">Cras justo odio</li>
        //             </ul>
        //         </div>
        //         <h6 class="card-subtitle mb-2 text-muted criado-em">Criada em: 06/03/2019</h6>
        //         <p class="card-text">  </p>
        //         <div class="grupo-button">
        //             <button type="button" class="btn btn-primary float-left">Editar</button>
        //             <button type="button" class="btn btn-danger float-left">Apagar</button>
        //             <button type="button" class="btn btn-success float-right">Entrega Feita</button>
        //         </div>
        //     </div>
        // </div>`;
    }

    isPlural(quantidade){
        return quantidade > 1 ? "s" : "";
    }

    atualiza(model) {
        console.log(model);
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}