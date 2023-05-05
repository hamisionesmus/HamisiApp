import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor() {}
  getAll() {
    return [
      { id: 1, name: 'Hamisi', gender: 'male' },
      { id: 2, name: 'Onesmus', gender: 'male' },
      { id: 3, name: 'Kilumo', gender: 'male' },
    ];
  }
}
