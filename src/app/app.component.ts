import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('editor') editor: GanttEditorComponent;
  public editorOptions: GanttEditorOptions;
  public data: any;
  public colors = ['gtaskblue', 'gtaskred', 'gtaskyellow']

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.data = this.createRandom();
  }

  createRandom() {
    const projet = {
      nom: 'p1',
      datedeb: '2019-1-1',
      datefin: '2019-1-30',
      taches: [
        {
          _id: '5cb1dad015ffd018ec1b69a7',
          datedeb: '2019-04-13',
          datefin: '2019-04-15',
          nom: 'tache 1'

        },
        {
          _id: '5cb1dad015ffd018ec1b69a8',
          datedeb: '2019-04-16',
          datefin: '2019-05-18',
          nom: 'tache 2'

        }
      ]
    }

    return projet.taches.map(tache => {
      const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      return {
        'pID': tache._id,
        'pName': tache.nom,
        'pStart': tache.datedeb,
        'pEnd': tache.datefin,
        'pClass': randomColor,
        'pLink': '',
        'pMile': '',
        'pRes': '',
        'pComp': 0,
        'pGroup': '',
        'pParent': 0,
        'pOpen': '',
        'pDepend': '',
        'pCaption': '',
        'pNotes': ''
      }
    });
  }
}