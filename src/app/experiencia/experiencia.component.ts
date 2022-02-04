import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }
  public experiencias: any;
  ngOnInit(): void {
    this.experiencias = [
      {'nome': 'Digital House', 'tempo': 'Nov 2021 - Atual', 'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'},
      {'nome': 'Código Fonte TV', 'tempo': 'Nov 2021 - Atual', 'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'},
      {'nome': 'Zuplae', 'tempo': 'Nov 2021 - Atual', 'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'},
      {'nome': 'ContWeb', 'tempo': 'Nov 2021 - Atual', 'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'},
      {'nome': 'iurecode', 'tempo': 'Nov 2021 - Atual', 'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'},
      {'nome': 'Freelancer', 'tempo': 'Nov 2021 - Atual', 'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.'},
    ]
  }

}
