import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OredrComponent } from './oredr.component';

describe('OredrComponent', () => {
  let component: OredrComponent;
  let fixture: ComponentFixture<OredrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OredrComponent]
    });
    fixture = TestBed.createComponent(OredrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
