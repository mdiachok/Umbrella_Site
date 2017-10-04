import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksTypeListComponent } from './trucks-type-list.component';

describe('TrucksTypeListComponent', () => {
  let component: TrucksTypeListComponent;
  let fixture: ComponentFixture<TrucksTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucksTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
