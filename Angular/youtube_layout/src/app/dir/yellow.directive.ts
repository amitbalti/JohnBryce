import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appYellow]',
})
export class YellowDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    // Command which say to the element which the directive is act on, to change the background color to green
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
