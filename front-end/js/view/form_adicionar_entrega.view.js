import { View } from './view.js';

export class FormAdicionarEntregaView extends View {

    constructor(seletor) {
        super(seletor);
    }

    getTemplate() {
        return `<div id="form">
        <form>
                <div class="form-group">
                    <label for="destinatario">Destinatário</label>
                    <input type="text" class="form-control" id="destinatario" placeholder="Fulano de Tal">
                </div>
                <div class="form-group">
                    <label for="responsavel">Responsável</label>
                    <input type="text" class="form-control" id="responsavel" placeholder="Fulano de Tal">
                </div>
                <div class="form-group">
                    <label for="produtos">Quantidade de Produtos</label>
                    <select class="form-control" id="produtos">
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="dataprevista" class="col-form-label">Data Prevista para Entrega</label>
                    <input class="form-control" type="date" id="dataprevista">
                </div>
                <div class="form-group">
                    <label for="anotacoes">Anotações</label>
                    <textarea class="form-control" id="anotacoes" rows="3"></textarea>
                </div>
                <button type="button" id="btn-save" class="btn btn-success float-right">Salvar</button>
            </form> 

            <div class="botao-nova-entrega">
                <button type="button" class="btn btn-cancel btn-light">Cancelar</button>
            </div>
        </div>`;
    }

    atualiza() {
        // console.log(model);
        this.$seletor.innerHTML = this.getTemplate();
    }
}