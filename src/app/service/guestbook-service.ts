// import { Injectable, inject } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { CreateGuestbookEntry, GuestbookEntry } from '../guestbook/guestbook';

// @Injectable({
//   providedIn: 'root',
// })
// export class GuestbookService {
//   private http = inject(HttpClient);
//   private readonly baseUrl = 'http://localhost:3000/api'; // Replace with your actual API URL

//   constructor() {}

//   /**
//    * Get all guestbook entries
//    */
//   getEntries(): Observable<GuestbookEntry[]> {
//     return this.http.get<GuestbookEntry[]>(`${this.baseUrl}/guestbook`).pipe(
//       retry(2), // Retry failed requests up to 2 times
//       catchError(this.handleError)
//     );
//   }

//   /**
//    * Add a new guestbook entry
//    */
//   addEntry(entry: CreateGuestbookEntry): Observable<GuestbookEntry> {
//     const payload = {
//       ...entry,
//       message: entry.message.trim(),
//       sender: entry.sender.trim(),
//     };

//     return this.http
//       .post<GuestbookEntry>(`${this.baseUrl}/guestbook`, payload)
//       .pipe(catchError(this.handleError));
//   }

//   /**
//    * Get a specific entry by ID
//    */
//   getEntry(id: number): Observable<GuestbookEntry> {
//     return this.http
//       .get<GuestbookEntry>(`${this.baseUrl}/guestbook/${id}`)
//       .pipe(catchError(this.handleError));
//   }

//   /**
//    * Delete a guestbook entry (if you want to add this feature later)
//    */
//   deleteEntry(id: number): Observable<void> {
//     return this.http
//       .delete<void>(`${this.baseUrl}/guestbook/${id}`)
//       .pipe(catchError(this.handleError));
//   }

//   /**
//    * Update a guestbook entry (if you want to add this feature later)
//    */
//   updateEntry(id: number, entry: Partial<CreateGuestbookEntry>): Observable<GuestbookEntry> {
//     const payload = {
//       ...entry,
//       message: entry.message?.trim(),
//       sender: entry.sender?.trim(),
//     };

//     return this.http
//       .put<GuestbookEntry>(`${this.baseUrl}/guestbook/${id}`, payload)
//       .pipe(catchError(this.handleError));
//   }

//   /**
//    * Handle HTTP errors
//    */
//   private handleError = (error: HttpErrorResponse): Observable<never> => {
//     let errorMessage = 'An unexpected error occurred';

//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       // Server-side error
//       switch (error.status) {
//         case 400:
//           errorMessage = 'Bad request. Please check your input.';
//           break;
//         case 401:
//           errorMessage = 'Unauthorized access.';
//           break;
//         case 403:
//           errorMessage = 'Access forbidden.';
//           break;
//         case 404:
//           errorMessage = 'Resource not found.';
//           break;
//         case 422:
//           errorMessage = 'Validation failed. Please check your input.';
//           break;
//         case 429:
//           errorMessage = 'Too many requests. Please try again later.';
//           break;
//         case 500:
//           errorMessage = 'Internal server error. Please try again later.';
//           break;
//         case 503:
//           errorMessage = 'Service unavailable. Please try again later.';
//           break;
//         default:
//           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//       }
//     }

//     console.error('GuestbookService Error:', error);
//     return throwError(() => new Error(errorMessage));
//   };
// }
