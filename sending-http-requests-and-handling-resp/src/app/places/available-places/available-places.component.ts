import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error=signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{places: Place[] }>('http://localhost:3000/places')
    .subscribe({
      next: (resData) =>{
        this.places.set(resData.places);
      },
      error: (error)=>{
        console.log(error);
        this.error.set("Something went wrong fetching the available places. Try again later!");
      },
      complete: ()=>{
        this.isFetching.set(false);
      }
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    });
  }
}
