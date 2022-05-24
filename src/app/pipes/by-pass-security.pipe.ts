import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'byPassSecurity'
})
export class ByPassSecurityPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}


  transform (value: string){
    return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(value))
  }
  

}
