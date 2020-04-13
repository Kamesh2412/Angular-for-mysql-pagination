import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service'
import {saveAs} from 'file-saver'
import {Emp} from '../emp'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // user={
  //   page:1,
  //   numPerPage:100000
  //   }
  totalItems = 1;
    page:any = 1
    pageSize:any = 5000
  homeData: Emp[]
  
 
  // page: number;
  // pageSize: number;
  constructor(private home: HomeServiceService) { }
csvData:any
  ngOnInit(): void {
   
    this.home.getWebDetails(this.page,this.pageSize).subscribe(result => {
      this.homeData = result.rows
    this.totalItems = result.numRows 
    console.log('Result :', result)
    console.log('HomeData',this.homeData)
  })
}

  getPage(){
    this.home.getWebDetails(this.page,this.pageSize).subscribe(result => {
      this.homeData = result.rows
      console.log('Result :', result)
      console.log('HomeData',this.homeData)
    })
  }
  
 
  
  
  // get Pagination(): any{
   
  //   return this.homeData.map((country: any, i: number)=>({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    
  // }

  getData(){
    this.home.getCsvFile().subscribe(result1=>saveAs(result1,'kamesh.csv'),error=>console.log(error))
    // console.log('result1:',result1)
    // console.log(this.csvData)
  }

}
