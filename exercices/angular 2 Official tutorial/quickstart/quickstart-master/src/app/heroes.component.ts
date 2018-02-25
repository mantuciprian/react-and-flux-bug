import { Component } from '@angular/core';
//import { HeroDetailComponent } from './hero-detail.component'
import { Hero } from './hero';
import { HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
 templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
    
})
export class HeroesComponent  {
    title = 'Tour of Heroes';
    heroes : any;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero=hero;
    }
    constructor(private heroService: HeroService) {
       this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
   getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }


}


