import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  isLoading: boolean = true;
  categoriesLists: string[] = [];

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  private async loadingData():Promise<any> {
    await this.api.get('categories?app=web').then((res) => {
      this.categoriesLists = res.data;
      this.isLoading = false;
    });
  }

  public navigate(element: any) {
    this.router.navigateByUrl(`directory/${element.id}`);
  }

  async ngOnInit() {
    await this.loadingData();
  }

}
