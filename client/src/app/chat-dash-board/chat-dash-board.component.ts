import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionService } from '@services/session.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-chat-dash-board',
  templateUrl: './chat-dash-board.component.html',
  styleUrls: ['./chat-dash-board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatDashBoardComponent implements OnInit {
  currentRoomId: string;
  user: User;
  users: User[];

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.getUserInfo().subscribe(user => {
      this.user = user;
    });
  }

  setRoom(roomId) {
    this.currentRoomId = roomId;
  }

  setUserForRoom(users) {
    this.users = users;
  }

  onLogOutClick() {
    this.sessionService.logout();
  }
}
