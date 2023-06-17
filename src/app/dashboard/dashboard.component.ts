import { Component, OnInit } from '@angular/core';
import { UrlShorteningService } from '../shared/service/url-shortening.service';
import { UrlModel } from '../shared/model/url.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  originalUrl: string = "";
  errorOccured: boolean = false;
  errorMessage: string = "";
  urlGenerated: boolean = false;
  shortUrlValue = "";

  constructor(private urlService: UrlShorteningService) {}

  generateShortUrl() {
    this.urlService.createShortUrl(this.originalUrl).subscribe({
      next: url => {
         console.log(url);
         this.urlGenerated = true;
         this.shortUrlValue = url.shortenedUrl;
         this.errorOccured = false;
        this.errorMessage = "";

      },
      error: (err) => {
        console.log(err);
        this.errorOccured = true;
        this.errorMessage = err.error.message;
        this.urlGenerated = false;
        this.shortUrlValue = "";
      }
    });
  }

}
