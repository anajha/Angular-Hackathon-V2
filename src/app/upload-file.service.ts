import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

  FOLDER = 'resume/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: '',
        secretAccessKey: '',
        region: ''
      }
    );

    const params = {
      Bucket: '',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}