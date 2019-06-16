import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysCreateComponent } from './toys-create.component';

describe('ToysCreateComponent', () => {
  let component: ToysCreateComponent;
  let fixture: ComponentFixture<ToysCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
