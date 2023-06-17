import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLinkComponent } from './open-link.component';

describe('OpenLinkComponent', () => {
  let component: OpenLinkComponent;
  let fixture: ComponentFixture<OpenLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
