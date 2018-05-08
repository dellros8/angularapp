import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerpicturesComponent } from './beerpictures.component';

describe('BeerpicturesComponent', () => {
  let component: BeerpicturesComponent;
  let fixture: ComponentFixture<BeerpicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerpicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
