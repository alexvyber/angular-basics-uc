import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-root",
  template: `<div class="app">Hello Angular!</div>
    <h1>{{ message.length ? message : "zalupa" }}</h1>
    <h1>{{ newMessage }}</h1>
    <!-- <h1 [innerText]="math.random() > 0.5 ? 'asdfasdf' : 'qwerqwer'"></h1> -->
    <!-- <h1 [innerText]="(() => { return "asdfasdf"})()"></h1> -->
    <!-- <h1>{{(() => { return "asdfasdf"})()}}</h1> -->

    <!-- (change)="hadleInput($event)" -->

    <input
      [value]="'aaaaaaaaaaaaaa'"
      (input)="newMessage = messageInput.value"
      #messageInput
      #messageInput2
      #messageInput3 />
    <p>{{ messageInput2.value }}</p>
    <p>{{ messageInput3.value + "~~" }}</p>
    <button (click)="handleClick()">asdfasdf</button>
    <!-- <h1>
      {{ math.random() > 0.5 ? 'asdfasdf' : 'qwerqwer' }}
    </h1>  --> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 80px;
        color: #455667;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string

  newMessage: string = ""

  math = Math

  constructor() {}

  ngOnInit() {
    this.message = "aaaaaaaaaaa"
    console.log("Hello World!")
  }

  handleClick() {
    console.log("click")
  }

  hadleInput(event: Event) {
    const { value } = event.target as HTMLInputElement
    this.newMessage = value
    console.log("🚀 ~ AppComponent ~ hadleInput ~ value:", value)
  }
}

// function isTargetInEvent(e: Event): e is Event & { target: EventTarget } {
//   if ('target' in e) return true;
//   return false;
// }
