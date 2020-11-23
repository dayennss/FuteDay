import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '(appConfiguracaoTabela)'
})
export class ConfiguracaoTabelaDirective {

  constructor(private el: ElementRef) {    
    const elemento = el.nativeElement
    console.log(elemento)
  }

}
