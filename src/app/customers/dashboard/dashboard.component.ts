import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import { DashboardData }  from './dashboard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   dashboardData: DashboardData[];
   fileData: File = null;
  constructor( private ds: DashboardService, private http: HttpClient,private route: ActivatedRoute ) 
  {  }
  
  ngOnInit() {
    this.getData();
  }
  
  getData(): void {
     
    this.ds.getData()
      .subscribe((data: DashboardData[]) => {
        this.dashboardData = data;;
      console.log('get aggrgate');
  });
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}
 
 onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('http://localhost:4000/dashboard/upload', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
}
 
}
