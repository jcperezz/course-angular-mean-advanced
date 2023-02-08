import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkObject = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme');
    const defaultTheme = './assets/css/colors/default-dark.css';

    this.linkObject?.setAttribute('href', url ?? defaultTheme);
  }

  changeTheme( theme:string ){
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkObject?.setAttribute('href', url);
    
    localStorage.setItem('theme', url);

    this.updateWorkingOption();

  }

  updateWorkingOption(): void {
    const theme = localStorage.getItem('theme');
    const themeOptions = document.querySelectorAll('.selector');

    themeOptions?.forEach( option => {
      option.classList.remove('working');
      const dataTheme = option.getAttribute('data-theme');
      const urlDataTheme = `./assets/css/colors/${ dataTheme }.css`;

      if(urlDataTheme === theme) {
        
        option.classList.add('working');
      }

    });
  }
}
