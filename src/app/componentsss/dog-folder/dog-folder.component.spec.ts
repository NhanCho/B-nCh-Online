import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFolderComponent } from './dog-folder.component';

describe('DogFolderComponent', () => {
  let component: DogFolderComponent;
  let fixture: ComponentFixture<DogFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
