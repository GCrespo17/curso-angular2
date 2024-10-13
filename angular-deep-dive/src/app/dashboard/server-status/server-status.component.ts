import { AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //Forma vieja de OnDestroy
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor(){
    //Me permite hacer seguimiento del cambio dentro de mi ts en vez de solamente en el html
    effect(()=>{
      console.log(this.currentStatus());
    });
  }

  ngOnInit(){
    console.log('ON INIT');
    //this.interval=
    const interval=setInterval(()=>{
      const rnd=Math.random(); //0-0.999999999999

      if(rnd<0.5){
        this.currentStatus.set('online');
      }else if(rnd<0.9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unknown');
      }
    }, 5000);
    //Esta es la forma elegante de destruir, pero solo disponible en versiones nuevas de Angular
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    });
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }
  
  //Destruye el intervalo que se creo arriba para que no existan memory leaks y sea mas eficienta
  //Esta es la forma vieja
  // ngOnDestroy(){
  //   clearTimeout(this.interval);
  // }

}
