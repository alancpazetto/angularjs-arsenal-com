import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {WeaponsComponent} from './weapons/weapons.component';
import {BattlefieldComponent} from './battlefield/battlefield.component';
import {SocialComponent} from './social/social.component';

@Component({
    selector: 'angular-arsenal',
    templateUrl: './app/app.html',
	// styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
		{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
		{ path: '/weapons', name: 'Weapons', component: WeaponsComponent },
		{ path: '/battlefield', name: 'Battlefield', component: BattlefieldComponent },
		{ path: '/social', name: 'Social', component: SocialComponent }
	// { path: '/heroes', name: 'Heroes', component: HeroesComponent },
	// { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class AppComponent {
	public title : string = 'Angular Arsenal'
	constructor(){
		console.log('## APP COMPONENT');
	}
}