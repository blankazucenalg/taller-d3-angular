import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const d3: any;

@Component({
  selector: 'app-d3-basics',
  templateUrl: './d3-basics.component.html',
  styleUrls: ['./d3-basics.component.scss']
})
export class D3BasicsComponent implements OnInit, AfterViewInit {
  content: string[] = [
    '// d3.select(selection).attr(name [,value]); \nvar parrafo = d3.select("#example1 p"); \nconsole.log(parrafo);'
  ];
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    /** Code 0 */
    // d3.select(selection).attr(name [,value]);
    const parrafo = d3.select('#example1 p');
    console.log(parrafo);

    /** Code 1 */
    // d3.select(selection).attr(name [,value]);
    // .attr() Atributos del elemento <p class="" id="" type="" > <circle r="" cx="" cy="" fill="" style="">
    // .style() CSS <div style="background: red; color: white">

    d3.selectAll('#example1 p') // TODOS los p dentro de #example1
      .style('color', 'orange'); // Color de fuente

    /** Code 3 */
    /**
     * <p class="parrafo"></p>    -------> "Hola amigos"
     */
    // Iteracion con d3
    d3.selectAll('#example2 p')
      .each(function(d, i) {
        console.log(d);
        console.log(i);
        console.log(this);
        d3.select(this)
          .style('font-size', `${(Math.random() * 40)}px`);
      });

    d3.selectAll('#example2 p')
      .style('font-size', () => {
        return (Math.random() * 40) + 'px';
      });

    /** Ejercicio 1 */
    // Recuerda el selector del hijo en la n-ésima posición div:nth-child(2)
    // d3.selectAll(<-- Todos los div dentro de #ejercicio1 -->)
    //  .style('background', <-- Color -->);

    d3.selectAll('#ejercicio1 div')
      .style('background-color', '#9475FF');

    d3.select('#ejercicio1 div')
      .style('color', 'white');

    d3.select('#ejercicio1 div:nth-child(2)')
      .attr('class', 'circle');

    /** Code 4 */
    const data = ['Parrafo A', 'Párrafo B', 'Párrafo C', 'Párrafo D'];
    const seleccionConDatos = d3.select('#example3 .panel-body')
      .selectAll('p')
      .data(data);

    seleccionConDatos // Update
      .text(d => d);

    seleccionConDatos // Enter <- datos nuevos
      .enter()
      .append('p')
      .text(d => d);

    /** Code 5 */
    const data2 = ['Parrafo A', 'Párrafo C', 'Párrafo D', 'Párrafo E', 'Párrafo F'];
    const selection = d3.select('#example4 .panel-body')
      .selectAll('p')
      .data(data2, d => d);
    console.log(selection);

    // UPDATE
    selection
      .text(d => d);

    // ENTER
    selection
      .enter()
      .append('p')
      .text(d => d);

    // EXIT
    selection
      .exit()
      .remove();

    d3.selectAll('#example4 p')
      .data(['Párrafo C'], d => d)
      .each(function(d, i) {
        console.log(d);
        console.log(i);
        console.log(this);
      });

    /** Ejercicio 2 */

    d3.selectAll('#ejercicio2 *').remove();

    const datos = [30, 40, 50, 80, 100];

    const contenedor = d3.select('#ejercicio2');
    console.log('contenedor', contenedor);

    // Todo esto va a estar sobre la referencia del contenedor
    const seleccion = contenedor
      .selectAll('div') // Aun no existen
      .data(datos);

    // update - lo que si hizo match
    console.log(seleccion);
    // seleccion
    //  .attr()

    // enter - datos que no tienen elemento, datos nuevos
    seleccion
       // Se hace el enlace con los datos
        .enter()// Usar la subselección .enter()
          .append('div') // Agregar un nuevo div usando .append('div')
            .attr('class', 'square');

    // exit() - elementos que no tienen dato, elementos viejos sobrantes
  }

}
