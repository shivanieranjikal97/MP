import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'spit'
})
export class SpitPipe implements PipeTransform {

  constructor(private dom: DomSanitizer){
    
  }

  transform(url){
  return this.dom.bypassSecurityTrustResourceUrl(url);
  
  
  }

}
