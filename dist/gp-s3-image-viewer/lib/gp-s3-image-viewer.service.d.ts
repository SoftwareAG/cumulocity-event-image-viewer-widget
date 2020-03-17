import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
export declare class GpS3ImageViewerService {
    private http;
    urlChanged: Subject<String>;
    imgSrc: string;
    constructor(http: HttpClient);
    fetchImageFronMaseUrl(url: any): import("rxjs").Observable<Object>;
}
