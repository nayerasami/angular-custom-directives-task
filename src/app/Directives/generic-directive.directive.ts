import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGenericDirective]'
})
export class GenericDirectiveDirective implements OnInit {
  @Input() appGenericDirective: string;
  private regexPattern: RegExp = /./;

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    // this.regexPattern = new RegExp(this.pattern)
    switch (this.appGenericDirective) {
      case 'prevent special characters':
        this.regexPattern = /[^a-zA-Z0-9\u0600-\u06ff]/g;
        break;
      case 'accept only characters':
        this.regexPattern = /[^a-zA-Z\u0600-\u06ff]/g;
        break;
      case 'restrict arabic characters':
        this.regexPattern = /[\u0600-\u06ff]/g;
        break;

    }
  }

  @HostListener('input', ['$event']) onTextChange(event: Event) {
    event.preventDefault()
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;

    console.log(this.regexPattern.test(currentValue))


    if (this.regexPattern.test(currentValue)===false) {

      console.log("current value", currentValue)

      console.log("pattern doesn't match")
      inputElement.value = currentValue.replace(this.regexPattern, '')

    }

  }
}
