import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    BtnComponent,
    IconComponent,
    LinkComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
