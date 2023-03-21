import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasureInputComponent } from '../mInput/measure-input.component';
import { MeasuringToolsListComponent } from '../mTools-list/measuring-tools-list.component';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomePageComponent,
        MeasureInputComponent,
        MeasuringToolsListComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
