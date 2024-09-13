import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoemchildComponent } from './hoemchild.component';

describe('HoemchildComponent', () => {
  let component: HoemchildComponent;
  let fixture: ComponentFixture<HoemchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoemchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoemchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
