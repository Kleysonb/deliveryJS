export class BaseService {

    // CRUD com o Servidor

    constructor(extensaoURL) {
        this.extensaoURL = extensaoURL;
        this.baseURL = "/deliveryJS/back-end/data/";
    }

    create(instance) {

    }

    readAll() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `${this.baseURL}${this.extensaoURL}`);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        }.bind(this));
    }

    readOnly(id) {

    }

    update(instance) {

    }

    delete(id) {

    }

}