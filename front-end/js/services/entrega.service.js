import { BaseService } from './base.sevice.js';

export class EntregaService extends BaseService {

    constructor() {
        super('entregas.json');
    }

    getEntregas() {
        return super.readAll();
    }
}