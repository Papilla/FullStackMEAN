import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('aventureros') aventurerosElement: ElementRef | undefined
  @ViewChild('fantasia') fantasiaElement: ElementRef | undefined
  @ViewChild('botonFantasia') botonFantasiaElement: ElementRef | undefined
  @ViewChild('terror') terrorElement: ElementRef | undefined

  title = 'usoDelDom';

  constructor(private _render: Renderer2) {

  }

  cambiarFondo(elemento: any, color: string) {
    this._render.addClass(elemento.nativeElement, 'bg-color' + color);
    this._render.setStyle(elemento.nativeElement, 'padding', '1em');
    this._render.addClass(elemento.nativeElement, 'rounded-3');

    this._render.listen(this.botonFantasiaElement?.nativeElement, 'click', () => { this.cambiarTexto(this.fantasiaElement, 'He cambiado este texto mediante evento') });
    console.log(elemento);
  }

  cambiarTexto(elemento: any, texto: string) {
    this._render.setProperty(elemento.nativeElement, 'outerText', texto);
    this._render.removeClass(this.aventurerosElement?.nativeElement, 'bg-danger')
  }

  agregarTexto(contenedor: any) {
    const p = this._render.createElement('p');
    const texto = this._render.createText('Este es un párrafo creado con renderer2');
    this._render.appendChild(p, texto);
    this._render.appendChild(this._render.parentNode(contenedor.nativeElement), p);
    console.log(contenedor)
  }
}
