export class Entrega {
    
    constructor() {
        this.materiais = new Array();
    }

    adicionarMaterial(material) {
        this.materiais.push(material);
    }

    setPrevistaPara(date) {
        this.prevista_para = date;
    }

    setResponsavel(responsavel) {
        this.responsavel = responsavel;
    }

    setAnotacoes(anotacoes) {
        this.anotacoes = anotacoes;
    }

}

export class Material {
    constructor(nome, quantidade, unidade_medida, anotacoes) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.unidade_medida = unidade_medida;
        this.anotacoes = anotacoes;
        this.entregue = false;
    }
}