import { Component, OnInit, Inject } from '@angular/core';
import { User, GravatarService, Thesaurus, ThesaurusEntry } from '@myrmidon/cadmus-core';
import { AuthService } from '@myrmidon/cadmus-api';
import { AppService, AppQuery } from '@myrmidon/cadmus-state';

@Component({
  selector: 'bdm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: User | undefined;
  public logged: boolean;
  public itemBrowsers: ThesaurusEntry[]| undefined;

  constructor(
    @Inject('itemBrowserKeys')
    private _itemBrowserKeys: { [key: string]: string },
    private _authService: AuthService,
    private _gravatarService: GravatarService,
    private _appService: AppService,
    private _appQuery: AppQuery
  ) {
    this.logged = false;
  }

  ngOnInit(): void {
    this.user = this._authService.currentUserValue;
    this.logged = this.user !== null;

    this._authService.currentUser$.subscribe((user: User) => {
      this.logged = this._authService.isAuthenticated(true);
      this.user = user;
      // load the general app state just once
      if (user) {
        this._appService.load();
      }
    });

    this._appQuery
      .selectItemBrowserThesaurus()
      .subscribe((thesaurus: Thesaurus) => {
        this.itemBrowsers = thesaurus?.entries;
      });
  }

  public getItemBrowserRoute(id: string): string {
    return this._itemBrowserKeys[id] || id;
  }

  public getGravatarUrl(email: string, size = 80): string {
    return this._gravatarService.buildGravatarUrl(email, size);
  }

  public logout(): void {
    if (!this.logged) {
      return;
    }
    this._authService.logout();
  }
}
