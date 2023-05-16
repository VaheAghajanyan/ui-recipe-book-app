import {Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('betterHighlight') backgroundColor = 'red';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.backgroundColor);
  }

}
