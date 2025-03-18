import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormComponent } from './eform.component';

describe('EFormComponent', () => {
  let component: EFormComponent;
  let fixture: ComponentFixture<EFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
