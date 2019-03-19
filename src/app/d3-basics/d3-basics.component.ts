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
    // const datos = [30, 40, 50, 80, 100];
    // d3.selectAll('#ejercicio2 *').remove();
    // d3.select('#ejercicio2').selectAll('div')
    //   .data(datos) // Se hace el enlace con los datos
    //   // Usar la subselección .enter()
    //   // Agregar un nuevo div usando .append('div')
  }

}
