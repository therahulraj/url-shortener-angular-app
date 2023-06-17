export class UrlModel {
   
    id!: number;
    shortenedUrl!: string;
    originalUrl!: string;

    constructor(response: any) {
        if (response) {
        this.id = response.id;
        this.shortenedUrl = response.shortenedUrl;
        this.originalUrl = response.originalUrl;
        }
        
    }

}