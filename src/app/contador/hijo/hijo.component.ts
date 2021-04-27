import { Component, OnInit } from '@angular/core';
import { AppState } from '../../interfaces/reducers';
import { Store } from '@ngrx/store';
import * as actions from '../../contador/counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    })
  }

  multiplicar(){
    this.store.dispatch(actions.multiplicar({numero: 4}))
  }
  
  dividir(){
    this.store.dispatch(actions.dividir({numero: 2}))
  }

}
