import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendOperationsService {
  constructor(private http:HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/v1/resumeclassifier';
 
  public fileAnalyze(fileName,userName)
  { 
    return this.http.get(this.baseUrl+"/process",{
      params: {
        file_name: fileName,
        user_name: userName
      }});
  }

  public fileAnalysisResponse(fileName,userName)
  {
    return this.http.get(this.baseUrl+"/result",{
      params: {
      file_name: fileName,
      user_name: userName
    }})
  }

  public getProfileKeyword(categoryName,userName)
  { 
    return this.http.get(this.baseUrl+"/category",{
      params: {
        category_name: categoryName,
        user_name: userName
      }});
  }

  public postProfileKeyword(categoryList)
  { 
    return this.http.post(this.baseUrl+"/category",categoryList);
  }

  public deleteProfileKeyword(userName,categoryName,keywordList)
  { 
    return this.http.delete(this.baseUrl+"/category",{
      params: {
        user_name: userName,
        category_name: categoryName,
        keyword_list: keywordList
      }});
  }


  public getProfileType(userName)
  { 
    return this.http.get(this.baseUrl+"/profileType",{
      params: {
        user_name: userName
      }});
  }

  public postProfileType(profilerequest)
  {
    return this.http.post(this.baseUrl+"/profileType",profilerequest);
  }

  public deleteProfileType(userName,profileType)
  {
    return this.http.delete(this.baseUrl+"/profileType",{
      params: {
        user_name: userName,
        profile_type:profileType
    }});
  }
}
  
