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
        this.regexPattern = /[!@#$%^&*(),.|]/g;
        break;
      case 'accept only characters':
        this.regexPattern = /[0-9\!@#$%^&*(),.|]/g;
        break;
      case 'restrict arabic characters':
        this.regexPattern = /[\u0600-\u06ff]/g;
        break;

    }
  }




  @HostListener('input', ['$event'])
  onTextChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;
    if (currentValue.match(this.regexPattern)) {
      inputElement.value = currentValue.replace(this.regexPattern, '')
      event.preventDefault()
    }

  }
}
