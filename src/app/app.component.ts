import { Component ,OnInit, HostListener,ElementRef,HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @HostBinding() private title: String = 'app';

  @HostListener('mouseover') onHover() {
  window.alert('hover');
  }

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.title = 'MyApp';
  }

}
