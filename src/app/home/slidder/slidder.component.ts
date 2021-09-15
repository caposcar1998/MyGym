import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidder',
  templateUrl: './slidder.component.html',
  styleUrls: ['./slidder.component.scss']
})
export class SlidderComponent implements OnInit {
  rutinas: number[] = [1, 2, 3, 4, 5]
  totalCards: number = this.rutinas.length;
  rutinasNombre: string[] = ["Rutina Tabatha" , "Rutina Mancuernas", "Rutina para Adelgazar", "Rutina Gana Peso 2", "Rutina High Performance"]
  rutinasDescripcion: string[] = [
    "Rutina Tabata con Mancuernas, centralizada en aumento de masa muscular en biceps.• Estiramentos: 15min, \n• Progesión: Intermedia, \n•Descanso: 3:1,\n•Series:4 " ,
    "Rutina Mancuernas, centralizado en aumento de masa muscular en hombros, biceps, triceps, y gluteos. • Estiramentos: 15min, \n• Progesión: Intermedia, \n•Descanso: 2:1,\n•Series:4",
    "Rutina para Adelgazar, los ejercicios requieren de cuerda para saltar• Estiramentos: 15min, \n•Descanso: 2:1", 
    "Rutina Gana Peso 2, centralizado en aumento de masa muscular en hombros, biceps, triceps, y gluteos. • Estiramentos: 15min, \n• Progesión: Intermedia, \n•Descanso: 2:1,\n•Series:4", 
    "Rutina High Performance 5. • Estiramentos: 15min, \n•Descanso: 2:1,\n•Series:4"]
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

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    this.cardHeight = "550px";
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

  changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }
}