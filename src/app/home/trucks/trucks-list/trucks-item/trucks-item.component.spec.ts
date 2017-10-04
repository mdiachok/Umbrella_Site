import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksItemComponent } from './trucks-item.component';

describe('TrucksItemComponent', () => {
  let component: TrucksItemComponent;
  let fixture: ComponentFixture<TrucksItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucksItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
