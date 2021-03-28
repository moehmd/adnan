import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
teamMember: Team[] =[];

  constructor() { }

  ngOnInit(): void {
    this.teamMember = [
      {
      name: "Adnan Chafi",
      fb: "www.google.com",
      insta: "www.facebook.com",
      phone: 1,
      profileImg: "../../../../assets/images/team-1.jpg"
    },
    {name: "Alaa Chafi",
    fb: "https://www.youtube.com/watch?v=qre9tHmYA04",
    insta: "https://www.youtube.com/watch?v=qre9tHmYA04",
    phone: 2,
    profileImg: "../../../../assets/images/team-3.jpg"
  }
  ]
    
  }

}
