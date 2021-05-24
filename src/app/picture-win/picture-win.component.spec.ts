import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureWinComponent } from './picture-win.component';

describe('PictureWinComponent', () => {
  let component: PictureWinComponent;
  let fixture: ComponentFixture<PictureWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
