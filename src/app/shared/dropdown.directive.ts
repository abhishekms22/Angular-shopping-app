import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding("class.open")clickToggleData = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.clickToggleData = this.elRef.nativeElement.contains(event.target) ? !this.clickToggleData : false;
      }
      constructor(private elRef: ElementRef) {}
   
    
}