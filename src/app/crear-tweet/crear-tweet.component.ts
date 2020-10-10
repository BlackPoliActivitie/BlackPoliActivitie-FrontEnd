import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-crear-tweet',
  templateUrl: './crear-tweet.component.html',
  styleUrls: ['./crear-tweet.component.css']
})
export class CrearTweetComponent implements OnInit {
  username: string;
  dateCreate: Date;
  publicacion: string;
  date: Date;

  ngOnInit(): void {
  }

  crearTweet(){
    let newTweet: Tweet={
      username: this.username,
      dateCreate: this.dateCreate,
      publicacion: this.publicacion
    }
    console.log(newTweet);
  }

}
