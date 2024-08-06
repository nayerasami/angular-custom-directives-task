import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NoSpecialChar]'
})
export class NoSpecialCharDirective {
  // private regexPattern: any = /^[a-zA-Z0-9\u0600-\u06ff]*$/;
  private regexPattern: any = /[a-zA-Z0-9\u0600-\u06ff]/g;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.border = '1px solid red';
  }

  @HostListener('input', ['$event']) onTextChange(event: Event) {


    const currentValue = this.elementRef.nativeElement.value;
    console.log("currentValue", currentValue)
     console.log("regex",this.regexPattern)
    console.log(this.regexPattern.test(currentValue))

    if (this.regexPattern.test(currentValue) == false) {
      console.log("pattern doesn't match")
      this.elementRef.nativeElement.value = currentValue.replace(/[^a-zA-Z0-9\u0600-\u06ff]/g, '')
      event.preventDefault()
    }

  }
  

}
