import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { AboutUsPage } from './about-us.page';
import { FoundersComponentModule } from '../../../projects/founders/src';
import { TestimonialsComponentModule } from '@testimonials';
import { FooterComponentModule } from '@footer';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  NavComponentModule,
  FirebaseNavigationServiceModule,
  FoundersComponentModule,
  TestimonialsComponentModule,
  FooterComponentModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
