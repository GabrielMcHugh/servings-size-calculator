import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MeasuringToolsListComponent } from './measuring-tools-list.component';

describe('MeasuringToolsListComponent', () => {
  let component: MeasuringToolsListComponent;
  let fixture: ComponentFixture<MeasuringToolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MeasuringToolsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
