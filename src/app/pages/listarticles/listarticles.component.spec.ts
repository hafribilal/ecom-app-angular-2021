import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticlesComponent } from './listarticles.component';

describe('ListarticlesComponent', () => {
  let component: ListarticlesComponent;
  let fixture: ComponentFixture<ListarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
