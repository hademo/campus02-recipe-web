import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMenuDialogComponent } from './delete-menu-dialog.component';

describe('DeleteMenuDialogComponent', () => {
  let component: DeleteMenuDialogComponent;
  let fixture: ComponentFixture<DeleteMenuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteMenuDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
