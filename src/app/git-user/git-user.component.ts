import { Component, OnInit } from '@angular/core';

import { GitUserService } from './git-user.service';

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.css']
})
export class GitUserComponent implements OnInit {

  /**
  *VARS
  */
  userDefault: string  = 'felipemengatto'; // valor setado como default
  userListData: Object[]  = [];
  userListRepo: Object[]  = [];
  GitUserService: GitUserService;

  constructor(private _gitUserService: GitUserService) {
    
    this.GitUserService = _gitUserService;

  }

  ngOnInit() {
    this.findUserData(this.userDefault);
  }

  //Busca Usuario
  //@param {string}
  findUserData(userDefault) {

      let getNameUser:string = userDefault;
      
      this.GitUserService.findUserData(getNameUser).subscribe(
          function(response){
              this.userListData = response;

              //SE EXISTIR NOME
              //BUSCA REPOSITORIOS
              if (typeof this.userListData.name !== "undefined") {
                  //GET REPOS
                  this.findUserRepo(getNameUser);
              }
          }.bind(this)
      );

  }

  //Busca  Repositorios do Usuario
  //@param {string}
  findUserRepo(userDefault) {
      
      this.GitUserService.findUserRepo(userDefault).subscribe(
          function(response){
              this.userListRepo = response;
          }.bind(this)
      );
  }

}
