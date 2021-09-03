import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { clienteDTO } from "../../models/cliente.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient, public storege: StorageService) {

    }

    findByEmail(email: string): Observable<clienteDTO> {

        let token = this.storege.getLocalUser().token
        let authHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token });

        return this.http.get<clienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`, { 'headers': authHeader })
    }

    getImageFromBucket(id: String): Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, { responseType: 'blob' })
    }
}