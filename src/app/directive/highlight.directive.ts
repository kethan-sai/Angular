import { Directive, ElementRef, HostListener,Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
  constructor(private el: ElementRef) {
   
   }
   ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.highlightColor?this.highlightColor:'red';
   }


}
