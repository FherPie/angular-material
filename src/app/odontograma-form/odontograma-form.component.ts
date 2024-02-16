import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-odontograma-form',
  templateUrl: './odontograma-form.component.html',
  styleUrls: ['./odontograma-form.component.css']
})
export class OdontogramaFormComponent implements OnInit, AfterViewInit, OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  @ViewChild(TemplateRef, { static: true }) odontoTemplate!: TemplateRef<any> ;
  
  @ViewChild(TemplateRef, { static: true, read: ViewContainerRef })
  odontoContainer!: ViewContainerRef;


  ngAfterViewInit() {
    this.odontoContainer.createEmbeddedView(this.odontoTemplate);
  }

changeColor(_t13: HTMLElement) {
throw new Error('Method not implemented.');
}


  

}
