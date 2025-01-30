import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/services/api.service';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CategoriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts')})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
