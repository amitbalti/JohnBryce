import { style } from '@angular/animations';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreen]',
})

// Import the hook ability to act in the class
export class GreenDirective implements OnInit {
  // When we will create the variable as private, we can use the variable in the constructor everywhere in the class, also in other ways
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Command which say to the element which the directive is act on, to change the background color to green
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.elementRef.nativeElement.style.color = 'white';
  }
}
