import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error=signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);


  // ngOnInit(){
  //   this.isFetching.set(true);
  //   const subscription =     .subscribe({
  //     next: (resData) =>{
  //       this.places.set(resData.places);
  //     },
  //     error: (error)=>{
  //       console.log(error);
  //       this.error.set("Something went wrong fetching your favorite places. Try again later!");
  //     },
  //     complete: ()=>{
  //       this.isFetching.set(false);
  //     }
  //   });

  //   this.destroyRef.onDestroy(()=>{
  //     subscription.unsubscribe();
  //   });
  // }

}
