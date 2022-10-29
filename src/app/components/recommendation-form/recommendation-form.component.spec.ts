import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsFormComponent } from './recommendation-form.component';

describe('RecommendationsFormComponent', () => {
  let component: RecommendationsFormComponent;
  let fixture: ComponentFixture<RecommendationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
