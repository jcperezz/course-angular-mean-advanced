import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  private linkObject = document.querySelector('#theme');
  private themeOptions?: NodeListOf<Element>;

  ngOnInit(): void {
    this.themeOptions = document.querySelectorAll('.selector');
    this.updateWorkingOption();
  }


  changeTheme( theme:string ){
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkObject?.setAttribute('href', url);
    
    localStorage.setItem('theme', url);

    this.updateWorkingOption();

  }

  updateWorkingOption(): void {
    const theme = localStorage.getItem('theme');

    this.themeOptions?.forEach( option => {
      option.classList.remove('working');
      const dataTheme = option.getAttribute('data-theme');
      const urlDataTheme = `./assets/css/colors/${ dataTheme }.css`;

      if(urlDataTheme === theme) {
        
        option.classList.add('working');
      }

    });
  }

}
