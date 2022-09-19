import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/models/receta';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-form-receta',
  templateUrl: './form-receta.component.html',
  styleUrls: ['./form-receta.component.css'],
})
export class FormRecetaComponent implements OnInit {
  receta: Receta = {
    id: 0,
    titulo: '',
    contenido: '',
    adjunto: '',
    idUsuario: 0,
    idCategoria: 0,
    fecha: '',
    nombreUsuario: '',
  };

  id: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private learningService: LearningService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    
  }
  
  checkUser(): boolean {
    if (sessionStorage.getItem('tipo') === '1') {
      return true;
    } else {
      return false;
    }
  }

  public publicarReceta(): void {
  }

  public archivos: any = [];

  public previsualization: any;

  public capturarFile(event: any): any {
    const archivoCapturado = event.target.files;
    this.archivos.push(archivoCapturado);
    console.log(this.previsualization);
    this.getBase64(event);
  }

  public getBase64(event: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previsualization = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
