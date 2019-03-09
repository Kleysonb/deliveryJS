import { HttpSimulator } from '../../../back-end/http_simulator/http_simulator.js';

export class BaseService {

    // CRUD com o Servidor

    constructor(extensaoURL) {
        this.http = new HttpSimulator();
        this.extensaoURL = extensaoURL;
        this.baseURL = "/deliveryJS/back-end/data/";
    }

    create(instance) {

    }

    readAll() {
        return this.http.get('deliveryJS/back-end/entregas');
    }

    // readAll() {
    //     return new Promise(function (resolve, reject) {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open('GET', `${this.baseURL}${this.extensaoURL}`);
    //         xhr.onload = function () {
    //             if (this.status >= 200 && this.status < 300) {
    //                 resolve(JSON.parse(xhr.response));
    //             } else {
    //                 reject({
    //                     status: this.status,
    //                     statusText: xhr.statusText
    //                 });
    //             }
    //         };
    //         xhr.onerror = function () {
    //             reject({
    //                 status: this.status,
    //                 statusText: xhr.statusText
    //             });
    //         };
    //         xhr.send();
    //     }.bind(this));
    // }

    readOnly(id) {

    }

    update(instance) {

    }

    delete(id) {

    }

}