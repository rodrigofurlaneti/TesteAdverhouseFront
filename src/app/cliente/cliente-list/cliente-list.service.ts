import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from 'src/interface/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteListService {

  private route = 'https://localhost:7016/Cliente';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    var ret = this.http.get(this.route);
    return ret;
  }
}