import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MeasureInputComponent } from './measure-input.component';

describe('MeasureInputComponent', () => {
  let component: MeasureInputComponent;
  let fixture: ComponentFixture<MeasureInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MeasureInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the h3 element with text "Measurement"', () => {
    const h3Element = fixture.nativeElement.querySelector('h3');
    expect(h3Element.textContent).toContain('Measurement');
  });

  it('should display a select element with options', () => {
    const selectElement = fixture.nativeElement.querySelector('select[name="measurement"]');
    expect(selectElement).toBeTruthy();
    expect(selectElement.options.length).toBe(component.utensilsList.length);
  });

  it('should set the selected tool', () => {
    const selectElement = fixture.nativeElement.querySelector('select[name="measurement"]');
    const inputElement = fixture.nativeElement.querySelector('input[name="calculator"]');
    const expectedTool = component.utensilsList[0];

    selectElement.value = expectedTool.id;
    selectElement.dispatchEvent(new Event('input'));

    expect(component.selectedTool).toEqual(expectedTool.id);
    expect(inputElement.disabled).toBeFalsy();

    // inputElement.value = '10';
    // inputElement.dispatchEvent(new Event('input'));

    // expect(component.serves).toBe(10);
  });

  it('should disable the input element when no tool is selected', () => {
    const selectElement = fixture.nativeElement.querySelector('select[name="measurement"]');
    const inputElement = fixture.nativeElement.querySelector('input[name="calculator"]');

    selectElement.value = '';
    selectElement.dispatchEvent(new Event('input'));

    expect(inputElement.disabled).toBeTruthy();
  });
});

