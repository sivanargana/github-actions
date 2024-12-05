import { Component, inject, OnInit } from '@angular/core'; 
 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 
 
})
export class AppComponent implements OnInit {
 

  ngOnInit(): void {

    document.cookie = "token101=123456; expires=;domain=sivanargana.github.io path=/";

   
  }
 
}
