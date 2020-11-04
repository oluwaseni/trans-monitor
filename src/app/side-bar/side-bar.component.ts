import { Component, OnInit } from '@angular/core';



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   prevScrollpos = window.pageYOffset;

//   window.onscroll =
//   function() {
//   var currentScrollPos = window.pageYOffset;
//   if (this.prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   this.prevScrollpos = this.currentScrollPos;
// }

}
