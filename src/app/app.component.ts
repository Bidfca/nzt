import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { preWorkouts } from './categorias/pre-treinos';
import { thermogenics } from './categorias/termogenicos';
import { creatines } from './categorias/creatinas';
import { wheys } from './categorias/wheys';
import { hypercalorics } from './categorias/hipercaloricos';
import { stimulants } from './categorias/estimulantes';
import { proteinBars } from './categorias/barras-de-proteina';
import { accessories } from './categorias/acessorios';
import { bcaas } from './categorias/bcaas';
import { caffeines } from './categorias/cafeinas';
import { shakers } from './categorias/coqueteleiras';
import { glutamines } from './categorias/glutaminas';
import { imported } from './categorias/importados';
import { peanutButters } from './categorias/pastas-de-amendoin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nzt';
  filteredProducts: any[] | null = null;
  search$: BehaviorSubject<string> = new BehaviorSubject('');

  perCategory = [
    preWorkouts,
    thermogenics,
    creatines,
    wheys,
    hypercalorics,
    peanutButters,
    stimulants,
    proteinBars,
    bcaas,
    glutamines,
    caffeines,
    shakers,
    accessories,
    imported,
  ];

  ngOnInit() {
    this.search$.pipe(debounceTime(600)).subscribe((searchTerm) => {
      this.filteredProducts = searchTerm
        ? [
            ...preWorkouts.produtos,
            ...thermogenics.produtos,
            ...creatines.produtos,
            ...wheys.produtos,
            ...hypercalorics.produtos,
            ...peanutButters.produtos,
            ...stimulants.produtos,
            ...proteinBars.produtos,
            ...bcaas.produtos,
            ...glutamines.produtos,
            ...caffeines.produtos,
            ...shakers.produtos,
            ...accessories.produtos,
            ...imported.produtos,
          ].filter(({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : null;
    });
  }

  onSearchChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.search$.next(inputValue);
  }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }

  getFormattedPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }
}
