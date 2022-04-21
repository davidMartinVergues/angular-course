import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponentDMVComponent } from './components/test-component-dmv/test-component-dmv.component';
import { TestComponentDMV2Component } from './components/test-component-dmv2/test-component-dmv2.component';
import { SocialMediaShareButtonsComponent } from './components/social-media-share-buttons/social-media-share-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponentDMVComponent,
    TestComponentDMV2Component,
    SocialMediaShareButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
