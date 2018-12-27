import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { BackendOperationsService } from '../backend-operations.service';
import { FileAnalyzeResponse } from '../models/fileAnalyzeResponse';
import { FileResultResponse } from '../models/fileResultResponse';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  successfullyUploaded:boolean;
  responseRetrieved:boolean;
  fileResultResponse:FileResultResponse;
  fileAnalyzeResponse: FileAnalyzeResponse;
  selectedFiles: FileList;

  constructor(private alerts: AlertsService,private uploadService: UploadFileService,private backendService: BackendOperationsService) { 
  
  }

  ngOnInit() {
    this.responseRetrieved=false
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
    console.log("We are moving further");
    this.backendService.fileAnalyze(file.name,"admin")
    .subscribe((fileAnalyzeResponse:FileAnalyzeResponse)=>{
      console.log(fileAnalyzeResponse);
      if(fileAnalyzeResponse.response==="Resume profile classified successfully")
      {
        this.backendService.fileAnalysisResponse(file.name,"admin")
        .subscribe((fileResultResponse:FileResultResponse)=>{
          console.log(fileResultResponse);
          this.responseRetrieved=true;
          this.fileResultResponse=fileResultResponse;
          this.alerts.setDefaults('timeout',10);
          this.alerts.setMessage(fileResultResponse.response,'success');
          this.fileResultResponse=fileResultResponse;
      }
      )
      }
      else{
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Resume classification could not be performed on this document. Try another one",'success');
      }
      },
      error=>{
        this.alerts.setDefaults('timeout',10);
        this.alerts.setMessage("Error occurred while processing resume",'error');
      }) 
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
