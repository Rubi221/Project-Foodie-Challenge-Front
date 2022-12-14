import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'],
})
export class LearningComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];
  tipo!: number;

  public recetas: Receta[] = [];
  constructor(private aprendizajeServide: LearningService) {}

  ngOnInit(): void {
    this.aprendizajeServide.getAll().subscribe((response) => {
      this.recetas = response;
      for (let r of this.recetas) {
        if (r.fotoUsuario == null) {
          r.fotoUsuario =
            'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        }
      }
    });
    this.tipo = parseInt(sessionStorage.getItem('tipo')!);
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
