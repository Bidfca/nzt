import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, debounceTime } from 'rxjs';

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

  ngOnInit() {
    this.search$.pipe(debounceTime(600)).subscribe((searchTerm) => {
      this.filteredProducts = searchTerm
        ? [
            ...this.preWorkouts,
            ...this.thermogenics,
            ...this.creatines,
            ...this.wheys,
            ...this.hypercalorics,
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

  preWorkouts = [
    {
      img: '../assets/psycho-killer.png',
      name: 'PSYCHO KILLER 294g - Demons Lab',
      price: 147,
      description: '',
    },
    {
      img: '../assets/horus-150.png',
      name: 'HÓRUS 150g - MAX TITANIUM',
      price: 77,
      description: '',
    },
    {
      img: '../assets/evora-pw-150.png',
      name: 'ÉVORA PW 150g - DARKNESS',
      price: 77,
      description: '',
    },
  ];

  thermogenics = [
    {
      img: '../assets/lipodrene.png',
      name: 'LIP0DR3NE',
      price: 239,
      description: '',
    },
    {
      img: '../assets/black-viper.png',
      name: 'Black Viper - 90cps - Importado - Dragon Pharma',
      price: 229,
      description: '',
    },
    {
      img: '../assets/lipo-6.png',
      name: 'Termogênico Importado LIPO 6 - Nutrex',
      price: 187,
      description: '',
    },
  ];

  creatines = [
    {
      img: '../assets/creatina-hardcore-300.png',
      name: 'CREATINA HARDCORE 300g - INTEGRALMEDICA',
      price: 97,
      description: '',
    },
    {
      img: '../assets/crealkaline.png',
      name: 'Creatina IMPORTADA Crealkaline 300g - Demons Lab',
      price: 97,
      description: '',
    },
    {
      img: '../assets/creatina-probiotica-300.png',
      name: 'Creatina MonoHidratada - Probiotica 300g',
      price: 89,
      description: '',
    },
  ];

  wheys = [
    {
      img: '../assets/whey-integral-900-refil.png',
      name: 'Whey Protein 100% pure - Integralmedica 900g refil',
      price: 97,
      description: '',
    },
    {
      img: '../assets/whey-isolado-max-pote.png',
      name: 'Whey Protein ISOLADO - Max Titanium POTE',
      price: 167,
      description: '',
    },
    {
      img: '../assets/whey-probiotica-900.png',
      name: 'Whey protein',
      price: 95,
      description: '',
    },
  ];

  hypercalorics = [
    {
      img: '../assets/massa-nitro.png',
      name: 'HIPERCALÓRICO MASSA NITRO 2,52kg - PROBIOTICA',
      price: 87,
      description: '',
    },
    {
      img: '../assets/massa-nitro.png',
      name: 'HIPERCALÓRICO MASSA NITRO 2,52kg - PROBIOTICA',
      price: 87,
      description: '',
    },
    {
      img: '../assets/massa-nitro.png',
      name: 'HIPERCALÓRICO MASSA NITRO 2,52kg - PROBIOTICA',
      price: 87,
      description: '',
    },
  ];

  imported = [
    {
      img: '../assets/plasma-jet.png',
      name: 'Creatina + Beta alanina Importada 200g',
      price: 77,
      description: '',
    },
  ];
}
