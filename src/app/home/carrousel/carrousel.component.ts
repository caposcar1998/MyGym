import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  rutinas: number[] = [1, 2, 3, 4, 5]
  totalCards: number = this.rutinas.length;
  rutinasNombre: string[] = ["Rutina Biceps" , "Rutina Gluteo", "Rutina Triceps", "Rutina Hombros", "Rutina Espalda"]
  rutinasDescripcion: string[] = [
    "Rutina Biceps, centralizada en aumento de masa muscular en biceps.• Estiramentos: 15min, \n• Progesión: Intermedia, \n•Descanso: 3:1,\n•Series:4 " ,
    "Rutina Gluteos, centralizado en aumento de masa muscular en gluteos. • Estiramentos: 15min, \n• Progesión: Intermedia, \n•Descanso: 2:1,\n•Series:4",
    "Rutina Triceps los ejercicios requieren de cuerda para saltar• Estiramentos: 15min, \n•Descanso: 2:1", 
    "Rutina Hombros, centralizado en aumento de masa muscular en hombros, biceps, triceps, y gluteos. • Estiramentos: 15min, \n• Progesión: Intermedia, \n•Descanso: 2:1,\n•Series:4", 
    "Rutina Espalda • Estiramentos: 15min, \n•Descanso: 2:1,\n•Series:4",
  ]
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  cardHeight: string;
  containerWidth: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
    
  }

  async ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    this.cardHeight = "550px";
    var currentDisplaying = 1;
    while(true){
      await this.delay(2000);
      if (currentDisplaying >= this.totalPages) {
        currentDisplaying--;
        this.changePage(-currentDisplaying);
      } else {
        this.changePage(1);
        currentDisplaying++;
      }
     
    }
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      45}px) / ${this.cardsPerPage * 0.915})`;
  }

  getCardsPerPage() {
    return 3;
  }

  async changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms)
      
    );
  }
}