import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro Pessoas Simplificado';

  people = [];

  text = "";

  register() {
    this.people.push(this.text);
    this.text = "";
  }

  delete(pessoa) {
    this.people.splice(this.people.indexOf(pessoa));
  }

}
