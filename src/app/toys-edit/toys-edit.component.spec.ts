import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysEditComponent } from './toys-edit.component';

describe('ToysEditComponent', () => {
  let component: ToysEditComponent;
  let fixture: ComponentFixture<ToysEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
