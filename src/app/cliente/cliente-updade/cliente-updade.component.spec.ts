import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteUpdadeComponent } from './cliente-updade.component';

describe('ClienteUpdadeComponent', () => {
  let component: ClienteUpdadeComponent;
  let fixture: ComponentFixture<ClienteUpdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteUpdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteUpdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
