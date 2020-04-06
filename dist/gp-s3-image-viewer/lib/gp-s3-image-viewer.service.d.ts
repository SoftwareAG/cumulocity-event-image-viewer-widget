import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
export declare class GpS3ImageViewerService {
    private http;
    urlChanged: Subject<String>;
    imgSrc: string;
    s3: any;
    config: any;
    constructor(http: HttpClient);
    fetchImageFromBaseUrl(url: any): import("rxjs").Observable<Object>;
    fetchS3(config: any): void;
    getImage: (key: any) => any;
}
