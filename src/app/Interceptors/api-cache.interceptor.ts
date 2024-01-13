import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class ApiCacheInterceptor implements HttpInterceptor {
  private cachedApiResponses = new Map<string, HttpResponse<any>>();

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Cache only Get Methods
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cachedApiResponses.get(request.url);

    if (cachedResponse) {
      // console.log(`Cached: ${request.url}`);
      return of(cachedResponse);
    }
    // console.error(`Not Cached!!: ${request.url}`);

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cachedApiResponses.set(request.url, event);
        }
      })
    );
  }
}
