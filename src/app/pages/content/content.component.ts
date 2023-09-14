import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
import { DataFakeService } from '../../core/services/data-fake.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute,
    private dataFakeService: DataFakeService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    this.dataFakeService.getBlogHeroes().subscribe((r) => {
      const result = r.filter(article => article.id == id);
      console.log(result)
      result.find((value) => {
        this.contentTitle = value.title
        this.contentDescription = value.description
        this.photoCover = value.photoCover
      })
    })

  }

}
