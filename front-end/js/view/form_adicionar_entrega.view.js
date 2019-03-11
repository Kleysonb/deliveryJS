import { View } from './view.js';

export class FormEntregaView extends View {

    constructor(seletor) {
        super(seletor);
    }

    getTemplate(model) {
        return `<div id="form">
        <form>
                <div class="form-group">
                    <label for="destinatario">Destinatário</label>
                    <input type="text" class="form-control" value="${ model ? model.destinatario.nome : ""}" id="destinatario" placeholder="Fulano de Tal">
                </div>
                <div class="form-group">
                    <label for="responsavel">Responsável</label>
                    <input type="text" class="form-control" value="${ model ? model.responsavel.nome : ""}" id="responsavel" placeholder="Fulano de Tal">
                </div>
                <div class="form-group">
                    <label for="produtos">Quantidade de Produtos</label>
                    <select class="form-control" id="produtos">
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="dataprevista" class="col-form-label">Data Prevista para Entrega</label>
                    <input class="form-control" value="${ model ? model.prevista_para : ""}" type="date" id="dataprevista">
                </div>
                <div class="form-group">
                    <label for="anotacoes">Anotações</label>
                    <textarea class="form-control"  id="anotacoes" rows="3">${ model ? model.anotacoes : ""}</textarea>
                </div>
                <button type="button" id="btn-save" class="btn btn-success float-right">Salvar</button>
            </form> 

            <div class="botao-nova-entrega">
                <button type="button" class="btn btn-cancel btn-light">Cancelar</button>
            </div>
        </div>`;
    }

    atualiza(model) {
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}