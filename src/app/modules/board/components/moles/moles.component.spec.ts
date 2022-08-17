import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolesComponent } from './moles.component';

describe('MolesComponent', () => {
  let component: MolesComponent;
  let fixture: ComponentFixture<MolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
