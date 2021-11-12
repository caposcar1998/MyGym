import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EjerciciosService } from './ejercicios.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-ejercicios-lista',
  templateUrl: './ejercicios-lista.component.html',
  styleUrls: ['./ejercicios-lista.component.scss']
})

export class EjerciciosListaComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  profileJson: string = "hola"
  crearUsuario: any;
  existeUsuario: string = "No existe"
  triggerTableSuscription: Subscription;
  foto: string = "https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/elevacion-lateral-de-hombros-con-mancuernas-2992.png"
  titulo: string ="Brazos de acero"
  tiempo: string = "60"
  descripcion: string = "Para unos brazos de acero"
  lista:any[];
  
  constructor(private ejercicioService: EjerciciosService) { 
  }

  ngAfterViewInit(): void {
    this.getUsers();
    this.dtTrigger.next();
  }

 
  ngOnInit(): void {
    this.configDtOptions();
  }

  ngOnDestroy(): void {
    this.triggerTableSuscription.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destruyendo la tabla antes del renderizado
      dtInstance.destroy();
      // Volviendo a llamar al dtTrigger para el renderizado
      this.dtTrigger.next();
    });
  }

  getUsers(){
    this.ejercicioService.findEjercicios().subscribe(data=>
      {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
      this.lista = data["Mensaje"],console.log(this.lista)}
      ), err => console.log("Error")
  }

  configDtOptions() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true,
      select: true,
      order: [[0, "desc"]],
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      },
      dom: 'Bfrtip',
    };
  }

  

  /*
  this.homeService.findUser(profile.email).subscribe(data=>
    this.checkIfExists(JSON.parse(data["response"]).nombre,JSON.parse(data["response"]).id),
    err => console.log("No existe este usuario")
    )
*/
}
