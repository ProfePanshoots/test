import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores: Jugador[] = [
    {
      id: '1',
      nombre: 'Koby Bryant',
      imagen: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_05/3204601/200128-kobe-bryant-cover-section-tease.jpg',
      fecha: '1978 - 2020',
      descripcion: 'Hijo del exjugador de baloncesto Joe Bryant,6​está considerado como uno de los mejores baloncestistas de todos los tiempos. Ganó cinco campeonatos de la NBA con los Lakers y dos medallas de oro olímpicas con la selección estadounidense, fue dieciocho veces All-Star, quince veces All-NBA (once de ellas en el primer quinteto), doce veces miembro de los mejores quintetos defensivos, MVP de la Temporada en 2008,7​ MVP de las Finales en 2009 y 20108​ y máximo anotador de la liga en 2006 y 2007.9​10​ En 2020 fue incluido de manera póstuma en el Salón de la Fama del Baloncesto.'
    },
    {
      id: '2',
      nombre: 'Shaquille Oneal',
      imagen: 'https://fichadeportiva.com/wp-content/uploads/2019/07/shaquille-oneal-la-lakers-e1562813023790.png?w=845',
      fecha: 'Retirado',
      descripcion: 'Shaquille Rashaun O’Neal (Newark, Nueva Jersey, 6 de marzo de 1972) es un exjugador estadounidense de baloncesto, que se desempeñaba como pívot.2​ Es considerado como uno de los jugadores más dominantes de la historia de la NBA.3​4​ Oneal ganó cuatro campeonatos de la NBA, tres con Los Angeles Lakers y uno con Miami Heat, además de finalizar subcampeón con Orlando Magic en 1995 y con Los Angeles Lakers en 2004.'
    },
    {
      id: '3',
      nombre: 'Tracy McGrady',
      imagen: 'https://wallpapers.com/images/hd/tracy-mcgrady-8fzkcmhv61mnr0h5.jpg',
      fecha: 'Retirado',
      descripcion: 'McGrady entró en la NBA directamente desde el instituto, sin pasar por la universidad. Siete veces seleccionado para disputar el All-Star Game, aunque dos veces no participó por lesiones (2008 y 2009). Ha ganado dos veces el título de máximo anotador de la liga, en 2003 y 2004. Ocupa el cuarto lugar en puntos por partido en la historia de los playoffs (28.5). Antes de fichar por los Rockets en 2004, pasó siete años de su carrera en Toronto Raptors y Orlando Magic. McGrady fue elegido el 75 mejor jugador de la historia de la NBA en la lista elaborada por la revista SLAM en 2003 y actualmente entre los mejores 40 jugadores de todos los tiempos'
    },
  ]

  constructor() { }

  // METODOS CUSTOM
  // METODO QUE DEVUELVE OBJETO COMPLETO
  getAll() {
    return [...this.jugadores]
  }

  // METODO QUE DEVUELVE UN JUGADOR POR EL ID BUSCADO
  getJugador(id: string) {
    return {
      ...this.jugadores.find(aux => {
        return aux.id === id
      })
    }
  }

  // METODO QUE AGREGA UN JUGADOR
  addJugador(nombre: string, imagen: string, fecha: string, descripcion: string) {
    this.jugadores.push({
      nombre, imagen, fecha, descripcion, id: this.jugadores.length + 1 + ""
    })
  }

  // METODO QUE ELIMINA UN JUGADOR POR EL ID
  deleteJugador(id: string) {
    this.jugadores = this.jugadores.filter(aux => {
      return aux.id !== id
    })
  }
}
