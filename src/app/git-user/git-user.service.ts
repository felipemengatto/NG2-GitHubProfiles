import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GitUserService {

  // Construtor instancia HTTP module
  constructor (private http: Http) {}

  findUserData(data) {

      return this.http.get('https://api.github.com/users/' + data)
                .map(res => res.json())
                .catch(findUserFailed);

      function findUserFailed(error) {
          return error;
      }

  }

  findUserRepo(data) {

      return this.http.get('https://api.github.com/users/' + data + '/repos')
                .map(res => res.json())
                .catch(findUserRepoFailed);

      function findUserRepoFailed(error) {
          //console.log('Error Get User Repo API' + error.data);
          return error;
    }

  }

}
