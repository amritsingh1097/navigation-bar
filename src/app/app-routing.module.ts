import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { GetQuoteComponent } from './features/get-quote/get-quote.component';
import { FeedbackComponent } from './features/feedback/feedback.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
