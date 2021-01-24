import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatEditorComponent } from './seat-editor.component';

describe('SeatEditorComponent', () => {
  let component: SeatEditorComponent;
  let fixture: ComponentFixture<SeatEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
