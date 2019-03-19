import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SVGComponent } from './d3-svg.component';

describe('D3SVGComponent', () => {
  let component: D3SVGComponent;
  let fixture: ComponentFixture<D3SVGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3SVGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
