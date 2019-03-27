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
    // const parrafo = d3.select('#example1 p');
    // console.log(parrafo);

    /** Code 1 */
    // d3.select(selection).attr(name [,value]);
    // d3.selectAll('#example1 p').style('color', 'orange');

    /** Code 3 */
    // Iteracion con d3
    // d3.selectAll('#example2 p')
    // .each(function(d) {
    //   d3.select(this).style('font-size', (Math.random() * 40) + 'px');
    // });

    // d3.selectAll('#example2 p')
    //   .style('font-size', d => {
    //     return (Math.random() * 40) + 'px';
    //   });

    /** Ejercicio 1 */
    // Recuerda el selector del hijo en la n-ésima posición div:nth-child(2)
    // d3.selectAll(<-- Todos los div dentro de #ejercicio1 -->)
    //  .style('background', <-- Color -->);

    /** Code 4 */
    // const data = ['Parrafo A', 'Párrafo B', 'Párrafo C', 'Párrafo D'];
    // d3.select('#example3 .panel-body')
    //   .selectAll('p')
    //   .data(data)
    //   .enter()
    //   .append('p')
    //   .text(d => d);

    /** Code 5 */
    // const data2 = ['Parrafo A', 'Párrafo C', 'Párrafo D', 'Párrafo E', 'Párrafo F'];
    // const selection = d3.select('#example4 .panel-body')
    //   .selectAll('p')
    //   .data(data2);
    // console.log(selection);

    // // UPDATE
    // selection
    //   .text(d => d);

    // // ENTER
    // selection
    //   .enter()
    //   .append('p')
    //   .text(d => d);

    // // EXIT
    // selection
    //   .exit()
    //   .remove();

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
