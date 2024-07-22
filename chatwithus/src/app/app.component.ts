import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodycontentComponent } from "../mycomponents/bodycontent/bodycontent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodycontentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatwithus';
}
