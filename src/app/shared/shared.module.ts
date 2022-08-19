import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'

import { EvolutionComponent } from './evolution/evolution.component'
import { SolutionsComponent } from './solutions/solutions.component'
import { PartnersComponent } from './partners/partners.component'
import { TeamComponent } from './team/team.component'
import { MissionComponent } from './mission/mission.component'
import { ValuesComponent } from './values/values.component'
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'
import { ScrollspyDirective } from './scrollspy.directive'
import { LottieModule } from 'ngx-lottie'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import player from 'lottie-web';
import { ComparisonComponent } from './comparison/comparison.component';
import { FlowchartComponent } from './flowchart/flowchart.component'

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player
}
@NgModule({
  declarations: [
    EvolutionComponent,
    SolutionsComponent,
    PartnersComponent,
    TeamComponent,
    MissionComponent,
    ValuesComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective,
    ComparisonComponent,
    FlowchartComponent

  ],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule
  ],
  exports: [
    EvolutionComponent,
    SolutionsComponent,
    PartnersComponent,
    TeamComponent,
    MissionComponent,
    ValuesComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective,
    ReactiveFormsModule,
    ComparisonComponent
  ],
})
export class SharedModule {}
