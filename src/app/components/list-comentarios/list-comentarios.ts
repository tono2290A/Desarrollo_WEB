import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-comentarios',
  standalone: true, // solo si quieres que sea un componente standalone
  imports: [RouterLink],
  templateUrl: './list-comentarios.html',
  styleUrls: ['./list-comentarios.scss']
})
export class ListComentarios {
  listComentarios: Comentario[] = [
    // { titulo: 'Comentario 1', creador: 'Usuario 1', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-01') }
  ];
}
