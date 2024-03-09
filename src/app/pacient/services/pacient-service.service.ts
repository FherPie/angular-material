import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientService {
  
  url = `${environment.HOST}/`;
  endpoint: string = 'private';

  constructor(private http: HttpClient) {}

    savePacient(obj:any): Observable<any> {
        return this.http.post(this.url + this.endpoint + '/savePacient', obj);
    }


   updatePacient(obj:any): Observable<any> {
      return this.http.put(this.url + this.endpoint + '/updatePacient', obj);
   }


   getListPacient(): Observable<any> {
        return this.http.get(this.url + this.endpoint + '/listPacient');
    }

    getById(key:any): Observable<any> {
        return this.http.get(this.url + this.endpoint + '/getByIdPacient/' + key);
    }


    deletePacient(key:any): Observable<any> {
        return this.http.delete(this.url + this.endpoint + '/deletePacient/' + key);
    }

}
