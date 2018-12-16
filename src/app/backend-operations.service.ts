import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendOperationsService {
  constructor(private http:HttpClient) {}

  private analyzeUrl = 'http://localhost:5000/api/v1/resumeclassifier/process';

  private resultUrl = 'http://localhost:5000/api/v1/resumeclassifier/result';
 
  public fileAnalyze(fileName)
  { 
    return this.http.get(this.analyzeUrl,{
      params: {
        file_name: fileName,
        user_name: "admin"
      }});
  }
  public fileAnalysisResponse(fileName)
  {
    return this.http.get(this.resultUrl,{
      params: {
      file_name: fileName,
      user_name: "admin"
    }})
  }
}
