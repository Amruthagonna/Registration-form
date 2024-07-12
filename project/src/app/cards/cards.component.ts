import { Component } from '@angular/core';
import { WatchService } from '../services/watch.service';
import { Watch } from '../models/watch';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  watch:Watch[]=[];
constructor(private service :WatchService){}
ngOnInit():void{
  this.service.submitting().subscribe(data=>this.watch=data);
}
}
