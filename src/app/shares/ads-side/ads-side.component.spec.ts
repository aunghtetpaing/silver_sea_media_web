import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsSideComponent } from './ads-side.component';

describe('AdsSideComponent', () => {
  let component: AdsSideComponent;
  let fixture: ComponentFixture<AdsSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
