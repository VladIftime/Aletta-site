import { Component, OnInit } from '@angular/core'
import { AnimationItem } from 'lottie-web'
import { AnimationOptions } from 'ngx-lottie'
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})

/**
 * Features component
 */
export class SolutionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  options_industry: AnimationOptions = {
    path:
      'assets/animations/Chat Bot Animation/Chat Bot Coloured/Chatbot Colour Animation.json',
  }
  options_academic: AnimationOptions = {
    path: 'assets/animations/Blogging Minimalistic/Blogging.json',
  }
  options_patients: AnimationOptions = {
    path: '/assets/animations/Chatting Using Apps Animation/Colour/Chating using apps Colour.json',
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem)
  }
}
