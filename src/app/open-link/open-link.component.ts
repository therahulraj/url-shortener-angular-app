import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, withDebugTracing } from '@angular/router';
import { UrlShorteningService } from '../shared/service/url-shortening.service';
import { map, tap } from 'rxjs';
import { UrlModel } from '../shared/model/url.model';

@Component({
  selector: 'app-open-link',
  templateUrl: './open-link.component.html',
  styleUrls: ['./open-link.component.css']
})
export class OpenLinkComponent implements OnInit {
  errorOccured = false;
  linkNotFound = false;
  linkExpired = false;
  errorMessage = "";
  

  constructor(private route: ActivatedRoute, private urlService: UrlShorteningService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.urlService.getOriginalUrl(params['shortUrl']).pipe(map(url => new UrlModel(url))).subscribe({
        next: url => {
          console.log(url);
          window.location.href = url.originalUrl;
        }, error: err => {
          this.errorOccured = true;
          if (err.status == 410 || err.status == 404) {
            this.errorMessage = err.error.message;
          }
          console.log(err);
        }});
    });
  }

}
