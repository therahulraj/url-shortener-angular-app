import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URI } from "./config/app-config-uri.constants";
import { UrlModel } from "../model/url.model";


@Injectable({providedIn: 'root'})
export class UrlShorteningService {

    constructor(private http: HttpClient) {}

    createShortUrl(url: string) {
        return this.http.post<UrlModel>(URI.springBootApphost + URI.createShrotUrl, url);
    }

    getOriginalUrl(shortUrl: string) {
        return this.http.get<UrlModel>(URI.springBootApphost + "/" + shortUrl);
    }



}