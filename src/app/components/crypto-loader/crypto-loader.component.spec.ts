import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoLoaderComponent } from './crypto-loader.component';

describe('CryptoLoaderComponent', () => {
  let component: CryptoLoaderComponent;
  let fixture: ComponentFixture<CryptoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
