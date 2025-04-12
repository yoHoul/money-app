import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiService } from './core/services/api.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { NetworthChartComponent } from './core/components/charts/networthChart/networthChart.component';
import { PopupDialogComponent } from './core/components/popup-dialog/popup-dialog/popup-dialog.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        CategoriesPageComponent,
        NetworthChartComponent,
        PopupDialogComponent
    ],
    bootstrap: [
        AppComponent
    ], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
    ], 
    providers: [
        ApiService, provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
