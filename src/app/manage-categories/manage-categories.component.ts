import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BackendOperationsService } from '../backend-operations.service';
import { ProfileType } from '../models/profiletype';
import { CategoryResponse } from '../models/categoryResponse';
import { CategoryList } from '../models/categorylist';
import { ProfileRequest } from '../models/profilerequest';
import { ProfileResponse } from '../models/profileresponse';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {

  manageCategoryForm:FormGroup;
  selected:boolean;
  keywordpresent:boolean;
  profileType:ProfileType;
  profileTypes:ProfileType[]=[];
  categoryList:CategoryList;
  keywordList:string[];
  selectedProfileType:string;
  categoryresponse:CategoryResponse;
  profilerequest:ProfileRequest;
  profileresponse:ProfileResponse;

  constructor(private fb: FormBuilder,private alerts: AlertsService,private backEndOperations: BackendOperationsService) {
    this.manageCategoryForm = this.fb.group({
      profileTypeOption: '',
      profileType:'',
      keywords: this.fb.array([])
    })
   }

  ngOnInit() {
    this.selected=false;
    this.backEndOperations.getProfileType("admin")
    .subscribe((profileresponse:ProfileResponse)=>{
       profileresponse.getProfileType().forEach((profileName)=>{
        this.profileType=new ProfileType();
        this.profileType.setValue(profileName);
        this.profileType.setViewValue(profileName);
        this.profileTypes.push(this.profileType);
      }) 
    },
    response=>{
      if(response.status<200 || response.status>299)
      {
      this.alerts.setDefaults('timeout',10);
      this.alerts.setMessage("Error occurred while fetching profile categories",'error');
      }
    })
  }

  get manageProfileKeywordForms() {
    return this.manageCategoryForm.get('keywords') as FormArray
  }

  deleteNewKeyword(i) {
    this.manageProfileKeywordForms.removeAt(i)
  }

  addNewKeyword(){
    const keywds = this.fb.group({ 
      profileKeyword: [],
    })
    this.manageProfileKeywordForms.push(keywds);
    this.keywordpresent=true;
  }

  saveNewKeywords(){
    for(let keyword of this.manageCategoryForm.value.keywords)
    {
        this.keywordList.push(keyword);
    }

    this.categoryList.setUserName("admin");
    this.categoryList.setCategoryName(this.selectedProfileType);
    this.categoryList.setCategoryList(this.keywordList);

    this.backEndOperations.postProfileKeyword(this.categoryList)
    .subscribe((categoryresponse:CategoryResponse)=>{
      this.categoryresponse=categoryresponse;
      this.alerts.setDefaults('timeout',10);
      this.alerts.setMessage(categoryresponse.response,'success');
      },
      response=>{
        if(response.status<200 || response.status>299)
        {
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Error occurred while adding new keyword/s",'error');
        }
      }) 
  }

  removeKeywords(){
    for(let keyword of this.manageCategoryForm.value.keywords)
    {
        this.keywordList.push(keyword);
    }

    this.backEndOperations.deleteProfileKeyword("admin",this.selectedProfileType,this.keywordList)
    .subscribe((categoryresponse:CategoryResponse)=>{
        this.categoryresponse=categoryresponse;
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage(categoryresponse.response,'success');
      },
      response=>{
        if(response.status<200 || response.status>299)
        {
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Error occurred while deleting keyword/s",'error');
        }
      })  
  }

  addNewProfileType(){

    this.profilerequest.setUserName("admin");
    this.profilerequest.setProfileType(this.manageCategoryForm.value.profileType);

    this.backEndOperations.postProfileType(this.profilerequest)
    .subscribe((profileresponse:ProfileResponse)=>{
        profileresponse.getProfileType().forEach((profileName)=>{
         this.profileType=new ProfileType();
         this.profileType.setValue(profileName);
         this.profileType.setViewValue(profileName);
         this.profileTypes.push(this.profileType);
       }) 
     },
      response=>{
        if(response.status<200 || response.status>299)
        {
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Error occurred while adding new profile category",'error');
        }
      })  
  }

   removeProfileType(){

    this.backEndOperations.deleteProfileType("admin",this.manageCategoryForm.value.profileType)
    .subscribe((profileresponse:ProfileResponse)=>{
        profileresponse.getProfileType().forEach((profileName)=>{
         this.profileType=new ProfileType();
         this.profileType.setValue(profileName);
         this.profileType.setViewValue(profileName);
         this.profileTypes.push(this.profileType);
       }) 
     },
      response=>{
        if(response.status<200 || response.status>299)
        {
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Error occurred while deleting profile category",'error');
        }
      })  
  }

  getCategoryKeywords(profileType){
    this.selected=true;
    this.selectedProfileType=profileType;

    this.backEndOperations.getProfileKeyword(this.selectedProfileType,"admin")
    .subscribe((categoryresponse:CategoryResponse)=>{
        this.categoryresponse=categoryresponse;
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage(categoryresponse.response,'success');
      },
      response=>{
        if(response.status<200 || response.status>299)
        {
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Error occurred while fetching profile keywords",'error');
        }
      }) 
  }
}
