import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/core/model/blog.model';
import { DataFakeService } from 'src/app/core/services/data-fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs!: blog[];
  blogsBackground!: blog[];

  constructor(
    private dataFakeService: DataFakeService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getBackgroundBlog();
  }

  private getUsers() {
    this.dataFakeService.getBlogHeroes().subscribe({
      next: (res) => {
        this.blogs = res;
      },
    })
  }


  private getBackgroundBlog() {
    this.dataFakeService.getBlogBackgroundHeroes().subscribe({
      next: (res) => {
        this.blogsBackground = res;
        console.log(this.blogsBackground)
      },
    })
  }

}
