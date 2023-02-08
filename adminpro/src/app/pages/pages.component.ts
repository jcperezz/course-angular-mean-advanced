import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  private linkObject = document.querySelector('#theme');

  ngOnInit(): void {
    const url = localStorage.getItem('theme');
    const defaultTheme = './assets/css/colors/default-dark.css';

    this.linkObject?.setAttribute('href', url ?? defaultTheme);
  }

}
