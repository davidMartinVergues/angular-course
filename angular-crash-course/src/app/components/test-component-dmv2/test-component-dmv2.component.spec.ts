import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentDMV2Component } from './test-component-dmv2.component';

describe('TestComponentDMV2Component', () => {
  let component: TestComponentDMV2Component;
  let fixture: ComponentFixture<TestComponentDMV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentDMV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentDMV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
