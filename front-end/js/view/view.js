export class View {

    constructor(seletor) {
        this.$seletor = document.querySelector(seletor);
    }

    getTemplate(){
        throw new Error('Método getTemplate() precisa ser inicializado nas classes filhas');
    }
}