import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const d3: any;

@Component({
  selector: 'app-d3-svg',
  templateUrl: './d3-svg.component.html',
  styleUrls: ['./d3-svg.component.scss']
})
export class D3SVGComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /** Code 0 */
    const data = [30, 50, 80, 120, 150];
    d3.select('#ejemplo1')
      .selectAll('div')
      .data(data)
        .enter()
          .append('div')
            .attr('class', 'square')
            .style('background', 'steelblue')
            .style('margin', '5px')
            .style('width', (dato, indice) => `${dato}px`)
            .style('height', function(dato, indice) {
              console.log(this);
              console.log(dato);
              console.log(indice);
              return `${dato}px`;
            });

    /** Ejercicio 1 */
    // const datos = [30, 40, 50, 80, 100];
    // d3.selectAll('#ejercicio1 *').remove();
    // d3.select('#ejercicio1').selectAll('div')
    //   .data(datos) // Se hace el enlace con los datos
    //   .enter() // Regresa todos los datos 'nuevos'
    //   .append('div')// Agregar un nuevo div para cada dato
    //   .attr('class', 'circle')
    //   // A cada circulo dale un width y un height acorde con el valor del dato

    /** Code 1 */
    d3.csv('assets/data/CausasDeMortalidadDF2013.csv', d => {
      d.Defunciones = +d.Defunciones;
      return d; // 'Causa de defunciones'
    })
      .then(data2 => {
        console.log(data2);
        d3.select('#chart-bar')
        .selectAll('div') // AUN NO EXISTEN
        .data(data2)
          .enter() // para cada dato nuevo
            .append('div')
            .style('width', d => d.Defunciones / 22 + 'px')
            .style('background-color', 'yellowgreen')
            .style('margin-bottom', '3px')
            .style('padding', '1px')
            .style('font-size', '10px')
            .text(d => d.Defunciones);
      }).catch(err => {
        console.error(err);
      });

    /** Code 2 */
    d3.csv('assets/data/CausasDeMortalidadDF2013.csv', d => {
      return {
        name: d.Causas,
        deaths: +d.Defunciones
      };
    }).then(data3 => {
      data3.sort((a, b) => a.deaths > b.deaths ? -1 : 1);
      console.log(data3);

      const maxValue = d3.max(data3, d => d.deaths);
      const chartWidth = 690;

      const linear = d3.scaleLinear()
      .range([0, chartWidth])
      .domain([0, maxValue]);

      const color = d3.scaleLinear()
      .range(['blue', 'green', 'yellow', 'red'])
      .domain([0, maxValue / 4, maxValue / 2, maxValue]);

      d3.select('#scales')
      .selectAll('div')
      .data(data3, d => d.name)
        .enter().append('div')
          .style('width', d => linear(d.deaths) + 'px')
          .style('background-color', d => color(d.deaths))
          .style('margin-bottom', '3px')
          .style('color', 'white')
          .style('padding', '1px')
          .style('font-size', '10px')
          .text(d => d.deaths);
    });

    /** SVG */

    /** Code 3 */
    const svg = d3.select('#events')
      .append('svg')
        .attr('width', '690px');

    const names = ['click', 'overnout'];

    svg.selectAll('circle') // que aun no existen
      .data(names, d => d)
        .enter()
          .append('circle')
          .attr('cx', (d, i) => 200 * (i + 1))
          .attr('cy', 70)
          .attr('r', 70)
          .style('fill', 'purple')
          .attr('id', d => d);

    svg.select('#click')
      .on('click', (d, i) => {
        alert('Clicked!');
      });

    svg.select('#overnout')
      .on('mouseover', function(d, i) {
        d3.select(this)
          .style('fill', 'yellow');
      })
      .on('mouseout', function(d, i) {
        d3.select(this)
          .style('fill', 'purple');
      });

    /** Code 4 */
    d3.selectAll('#ejercicio2 *').remove();

    d3.csv('assets/data/planetas.csv', d => {
      return {
        planet: d.planeta,
        distance: +d.kmDistanciaAlSol,
        diameter: +d.diametroKm,
        radius: +d.diametroKm / 2,
        };
      }).then(data4 => {
        const width = document.getElementById('ejercicio2').offsetWidth; // Obtiene el ancho del contenedor #ejercicio2

        const maxDistance = d3.max(data4, d => d.distance); // Obtiene la mayor  distancia de los planetas con respecto al Sol
        console.log('El tamaño del contenedor y el valor máximo son: ', width, maxDistance);

        // Crea una escala lineal para las distancias de los planetas
        const distance = d3.scaleLinear()
          .range( [ 120, width - 25])
          // Establece el dominio de la escala
          .domain([ 0, maxDistance]);

        const height = document.getElementById('ejercicio2').offsetHeight; // Altura del contenedor
        const maxSize = d3.max(data4, d => d.radius);
        // Obtén el tamaño más grande de todos los planetas (d3.max(data4, function(d) { //Qué propiedad quieres? });
        const size = d3.scaleLinear()
          .range( [ 0, 30])
          .domain([ 0,  maxSize]);

        const color = d3.scaleOrdinal()
          .range(['#424E4C', '#7C5531', '#7BBBF0', '#CC522C', '#A67845', '#EBA340', '#75D6F1', '#2C73A9'])
          .domain(data4.map(d => d.planet));
          // Establece el dominio de la escala ordinal con la lista de los nombres de los planetas
        // data4.map(function(objeto){ return PROPIEDAD QUE QUIERES; })

        const svg = d3.select('#ejercicio2')
          .append('svg')
          .attr('width', width)
          .attr('height', height);

        // Dibuja circulos para cada planeta dentro del svg (Ve el ejemplo de los eventos)

        const grupoPlaneta = svg.selectAll('g')
          .data(data4, d => d.planet)
            .enter()
              .append('g')
              .attr('class', 'planet-group')
              .attr('x', d => distance(d.distance))
              .attr('y', height / 2);

        grupoPlaneta.append('circle')
          .attr('cx', d => distance(d.distance))
          .attr('cy', height / 2)
          .attr('r', d => size(d.radius))
          .attr('fill', d => color(d.planet))
          .on('mouseover', d => {
            grupoPlaneta.append('text')
              .attr('class', 'texto-planeta')
              .attr('x', distance(d.distance))
              .attr('y', height / 2 - 30)
              .attr('fill', 'white')
              .attr('text-anchor', 'middle')
              .text(d.planet);
          })
          .on('mouseout', d => {
            grupoPlaneta.select('.texto-planeta')
              .remove();
          })
          .on('click', d => {
            const earth = data4.find(o => o.planet === 'Tierra');
            const distanceFromEarth = Math.abs(d.distance - earth.distance);
            const percRadius = d.radius / earth.radius;
            const format = d3.format(',.0f');
            const format2 = d3.format(',.2f');
            d3.select('#info-planet')
              .html(`<p><b>${d.planet}</b> es un planeta del Sistema Solar,
              está a <span class="datum">${format(d.distance)}</span> km del Sol,
              y tiene un diámetro de <span class="datum">${format(d.diameter)}</span> km.</p>
              <p>En comparación con la Tierra se encuentra a
              <span class="datum">${format(distanceFromEarth)}</span> km y su radio es <span class="datum">${format2(percRadius)}</span>
              veces el de la Tierra</p>`);
          });

      });

    /** Code 5 */
    d3.csv('assets/data/AutosVendidosFeb2016.csv', d => {
      return {
        name: d.GRUPO,
        quantity: +d.CANTIDAD
      };
    }).then(data5 => {
      // Sort data5
      data5.sort((a, b) => a.quantity > b.quantity ? -1 : 1);

      // Margins of the chart
      const margin = {top: 20, right: 20, bottom: 40, left: 45};
      const width = 1100;
      const height = 500;

      // Draw histogram
      barchart(data5, width, height, margin);
    });

    function barchart(data5, chartWidth, chartHeight, margin) {
      const width = chartWidth - margin.left - margin.right;
      const height = chartHeight - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1);

      const y = d3.scaleLinear()
        .range([height, 0]);

      const xAxis = d3.axisBottom(x);

      const yAxis = d3.axisLeft(y)
                .ticks(10);

      d3.selectAll('#chart-svg *').remove();

      const svg2 = d3.select('#chart-svg')
        .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top} )`);

      x.domain(data5.map(d =>  d.name));
      y.domain([0, d3.max(data5, d =>  d.quantity)]);

      svg2.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

      svg2.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

      svg2.selectAll('.bar')
      .data(data5)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d =>  x(d.name))
      .attr('width', x.bandwidth())
      .attr('y', d =>  y(d.quantity))
      .attr('height', d =>  height - y(d.quantity));

      d3.selectAll('.x.axis text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(0,10)rotate(-20)');
    }
  }
}
