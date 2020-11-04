import { PaymentsService } from './payments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-bar',
  templateUrl: './payment-bar.component.html',
  styleUrls: ['./payment-bar.component.css']
})
export class PaymentBarComponent implements OnInit {

  constructor(private payments:PaymentsService) { }

  posts: any[] = [];
  totalCount: any;
  pageSize = 10;
  page = 1
  ngOnInit() {
    this.getAllPayments()
  }


  pageChanged(newPage) {
    this.page = newPage;
    this.getAllPayments()
  }


  getAllPayments(){
    this.payments.getPayments()
    .subscribe((postData)=>{
        this.posts = postData;
        this.totalCount = this.posts.length
        console.log(this.posts)
        console.log(this.posts.length)
    });

  }

  itemsDrop =[
    "All",
    "Reconciled",
    "Un-reconciled",
    "Settled",
    "Unsettled"
  ]

  p: number = 1;

  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  collection: any[] = [
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
    {type: "everything", price: "24", trans:"12345566", time:"12:34", recon: "reconciled"},
  ];

}
