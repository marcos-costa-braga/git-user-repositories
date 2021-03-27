import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<string>();
  userName: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome(){
    this.router.navigate(['/usuarios'])
  }
  onSubmit() {
    if(this.userName != undefined)
      this.newUserEvent.emit(this.userName);
  }
}
