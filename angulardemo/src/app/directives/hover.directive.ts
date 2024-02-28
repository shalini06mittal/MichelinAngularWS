import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit, OnChanges{

  @Input()
  itemname:string=''

  @HostBinding("src")
  imgSrc:string=''
  
  constructor(private elemref:ElementRef, 
    private renderer:Renderer2) {
        console.log(this.elemref.nativeElement)
        this.renderer.setStyle(this.elemref.nativeElement,'color','brown')
        this.renderer.setStyle(this.elemref.nativeElement,'border','3px solid black')
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`directive on init : ${this.itemname}`)
    this.imgSrc=`../../assets/${this.itemname}` 
  }
  ngOnInit(): void {
    console.log(`directive on init : ${this.itemname}`)
  }
   @HostListener('mouseenter')
   onMouseEnter(){
    this.renderer.setStyle(this.elemref.nativeElement,'color','black')
    this.renderer.setStyle(this.elemref.nativeElement,'border','3px solid red')
   }
   @HostListener('mouseleave')
   onMouseLeave(){
    this.renderer.setStyle(this.elemref.nativeElement,'color','brown')
    this.renderer.setStyle(this.elemref.nativeElement,'border','3px solid black')
   }


}
