import { ElementRef,Renderer2 } from '@angular/core';
import { HoverAffectDirective } from './hover-affect.directive';

describe('HoverAffectDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const rendererMock = {} as Renderer2;
    const directive = new HoverAffectDirective(elementRefMock,rendererMock);
    expect(directive).toBeTruthy();
  });
});
