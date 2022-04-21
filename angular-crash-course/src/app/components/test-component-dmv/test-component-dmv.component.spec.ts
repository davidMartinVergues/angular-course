import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentDMVComponent } from './test-component-dmv.component';

describe('TestComponentDMVComponent', () => {
  let component: TestComponentDMVComponent;
  let fixture: ComponentFixture<TestComponentDMVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentDMVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentDMVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
