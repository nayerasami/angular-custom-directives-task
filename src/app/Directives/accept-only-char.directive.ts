import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[AcceptOnlyChar]'
})
export class AcceptOnlyCharDirective {
  private regexPattern: any = /^[a-zA-Z\u0600-\u06ff]*$/;
  constructor(private elementRef: ElementRef) { }

  @HostListener('input', ['$event']) onTextChange(event: Event) {
    const currentValue = this.elementRef.nativeElement.value;
    if (this.regexPattern.test(currentValue) === false) {
      console.log("pattern didn't match")
      this.elementRef.nativeElement.value = currentValue.replace(/[^a-zA-Z\u0600-\u06ff]/g, '')
      event.preventDefault()
    }

  }
}
