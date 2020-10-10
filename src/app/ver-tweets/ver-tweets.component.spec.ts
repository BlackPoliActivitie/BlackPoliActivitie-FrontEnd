import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTweetsComponent } from './ver-tweets.component';

describe('VerTweetsComponent', () => {
  let component: VerTweetsComponent;
  let fixture: ComponentFixture<VerTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
