  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilhariaComponent } from './artilharia.component';

describe('ArtilhariaComponent', () => {
  let component: ArtilhariaComponent;
  let fixture: ComponentFixture<ArtilhariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilhariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtilhariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
