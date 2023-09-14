import { Component, OnInit, Input } from '@angular/core';
import { blog } from 'src/app/core/model/blog.model';
import { DataFakeService } from 'src/app/core/services/data-fake.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  blogs!: blog[];
  blog: blog = { id: 0, title: '', description: '', photoCover: '' };

  constructor(
    private dataFakeService: DataFakeService
  ) { }

  ngOnInit(): void {

  }

  addBlog() {
    this.dataFakeService.addBlogHero(this.blog).subscribe({
      next: (res) => {
        if (this.blogs) {
          this.blogs?.push(this.blog);
          console.log('this.blogs', this.blog);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addBlogBackground() {
    this.dataFakeService.addBlogBackgroundHero(this.blog).subscribe({
      next: (res) => {
        if (this.blogs) {
          this.blogs?.push(this.blog);
          console.log('this.blogs', this.blog);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
