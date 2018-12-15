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
    this.backendService.fileAnalyze(file.name)
    .subscribe((fileAnalyzeResponse:FileAnalyzeResponse)=>{
      if(fileAnalyzeResponse.getResponse()=="Resume profile classified successfully")
      {
        this.backendService.fileAnalysisResponse(file.name)
        .subscribe((fileResultResponse:FileResultResponse)=>{
          this.responseRetrieved=true;
          this.alerts.setDefaults('timeout',5);
          this.alerts.setMessage(fileResultResponse.getResponse(),'success');
          this.fileResultResponse=fileResultResponse;
      })
      }
      }) 
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
