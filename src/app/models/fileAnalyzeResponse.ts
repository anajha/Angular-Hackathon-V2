export class FileAnalyzeResponse {
    response: string;
    filename: string;

    setResponse(response:string)
    {
        this.response=response;
    }

    getResponse()
    {
        return this.response;
    }

    setFileName(filename:string)
    {
        this.filename=filename;
    }

    getFileName()
    {
        return this.filename;
    }
}