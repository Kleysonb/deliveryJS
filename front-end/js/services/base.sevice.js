import { HttpSimulator } from '../../../back-end/http_simulator/http_simulator.js';

export class BaseService {

    // CRUD com o Servidor
    constructor(extensaoURL) {
        this.http = new HttpSimulator();
        this.extensaoURL = extensaoURL;
        this.baseURL = "deliveryJS/back-end/";
    }

    create(instance) {
        this.http.post(`${this.baseURL}${this.extensaoURL}`, instance);
    }

    readAll() {
        return this.http.get(`${this.baseURL}${this.extensaoURL}`);
    }

    update(id, instance) {
        this.http.put(`${this.baseURL}${this.extensaoURL}/${id}`, instance);
    }

    getPersonalizado(addURL, id){
        // "deliveryJS/back-end/entregas/concluirEntrega/dwdg-51r5-e4g8"
        return this.http.get(`${this.baseURL}${this.extensaoURL}/${addURL}/${id}`);
    }

    delete(id) {
        return this.http.delete(`${this.baseURL}${this.extensaoURL}/${id}`);
    }

}