import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGenericDir]'
})
export class GenericDirDirective implements OnInit {
  @Input() appGenericDir: string;
  private regexPattern: RegExp = /./;
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    // this.regexPattern = new RegExp(this.pattern)
    switch (this.appGenericDir) {
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

  @HostListener('keydown', ['$event'])
  onTextChange(event: any) {
    const key = event.key.match(this.regexPattern);
    if (key) {
      event.preventDefault()
    }
  }       

  @HostListener('paste', ['$event']) onpaste(event: ClipboardEvent) {
    const pastedData: any = event.clipboardData ? event.clipboardData.getData('text/plain') || null : null;
    if (pastedData.match(this.regexPattern)) {
      event.preventDefault()
    }
  }

  @HostListener('drop', ['$event']) ondrop(event: DragEvent) {

    const droppedData = event.dataTransfer ? event.dataTransfer.getData('text') || null : null;
    if (droppedData !== null) {
      if (droppedData.match(this.regexPattern)) {
        event.preventDefault()
      }
    }
  }
}
