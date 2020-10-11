import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { InfoUserService } from '../service/info-user.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  hide = true;
  

  newUser: User;
  constructor(private infoUserService: InfoUserService) {
    this.newUser= new User ();
   }

  ngOnInit(): void {
  }

  creationUser () {
    console.log("Sirve le bottom");
    this.infoUserService.createUser(this.newUser);
  }

}
