import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[AcceptOnlyChar]'
})
export class AcceptOnlyCharDirective {
  private regexPattern: any = /[^a-zA-Z\u0600-\u06ff]/g;
  constructor(private elementRef: ElementRef) { }

  @HostListener('input', ['$event']) onTextChange(event: Event) {
    const currentValue = this.elementRef.nativeElement.value;
    console.log(this.regexPattern.test(currentValue))
    if (this.regexPattern.test(currentValue) === true) {
      this.elementRef.nativeElement.value = currentValue.replace(/[^a-zA-Z\u0600-\u06ff]/g, '')
      console.log("pattern didn't match")
      event.preventDefault()
    }

  }
}
