import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'david';
  age = 37;
  img =
    'https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=1350&q=75&fit=crop&ar=3%3A1&fm=pjpg&exp=-10';

  btnDisabled = true;

  person = {
    name: 'dmv',
    age: 66,
    avatar:
      'https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=1350&q=75&fit=crop&ar=3%3A1&fm=pjpg&exp=-10',
  };

  toggleBtn() {
    this.btnDisabled = this.btnDisabled ? false : true;
    //this.btnDisabled =!this.btnDisabled;
  }

  age_plus() {
    this.person.age++;
  }
  miScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop); // en que posición está el scroll
  }

  myKeyup(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
