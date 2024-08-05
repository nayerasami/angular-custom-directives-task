import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[RestrictArChar]'
})
export class RestrictArCharDirective {
  private regexPattern: any = /[\u0600-\u06ff]/g;

  constructor(private elementRef: ElementRef) { }

  @HostListener('input', ['$event']) onTextChange(event: Event) {
    console.log(this.elementRef.nativeElement)
    const currentValue = this.elementRef.nativeElement.value
console.log(this.regexPattern.test(currentValue) )
    if(this.regexPattern.test(currentValue) == true){
      event.preventDefault()
      console.log("pattern doesn't match")
      this.elementRef.nativeElement.value=currentValue.replace(/[\u0600-\u06ff]/g,'')
     
    }
  }
}
