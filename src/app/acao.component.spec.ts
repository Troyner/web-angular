import { TestBed, async } from '@angular/core/testing';
import { AcaoComponent } from './acao/acao.component';
describe('AcaoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AcaoComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AcaoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'web-angular'`, async(() => {
    const fixture = TestBed.createComponent(AcaoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('web-angular');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AcaoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to web-angular!');
  }));
});
