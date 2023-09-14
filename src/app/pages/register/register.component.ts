import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/core/model/blog.model';
import { DataFakeService } from 'src/app/core/services/data-fake.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
