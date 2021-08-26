import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    {
      id: 1,
      name: 'Watch Amazing Stories season 1.',
      description: 'date-night with Purity.',
    },
    {
      id: 2,
      name: 'Finish week 1 IP.',
      description: 'almost deadline.',
    },
    {
      id: 3,
      name: 'Buy a new phone.',
      description: 'Find a new iPhone',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
