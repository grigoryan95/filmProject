import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PostsService} from "./posts.service";
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import {HomeService} from "./home/home.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {InputTextModule} from 'primeng/inputtext';
import { FilterPipe } from './header/filter.pipe';
import {ColorPickerModule} from 'primeng/colorpicker';
import { FillterPipe } from './films/fillter.pipe';
import { PostsComponent } from './posts/posts.component'




@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    FillterPipe,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ColorPickerModule
  ],
  providers: [
    PostsService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
