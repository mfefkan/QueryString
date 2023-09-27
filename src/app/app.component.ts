import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  
  <a routerLink="a" [queryParams]="{ x: 3 }">a</a> & 

  <a routerLink="b" [queryParams]="bQueryString" queryParamsHandling="merge">b</a>  <br>

  <router-outlet></router-outlet>
  
  
  `,
})
export class AppComponent {

  bQueryString : any = {
    ahmet :"mehmet"
  }

  // Yukarıda görüldüğü gibi linke ekleme yapabiliyoruz. Fakat bu yöntem client tarafında bilinmemesi gereken detayları bildirdiği için kullanmak doğru olmaz
  
  //  queryParamsHandling="merge" sayesinde b'ye a'dan geldiğini link içerisinde gösterir a nın değerini de tutar. Çok önemlidir.
  // preserve de yapılabilir.
  

}
