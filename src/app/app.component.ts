import { Component, OnInit } from '@angular/core';

// Import the Cloudinary classes.
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';

// Import any actions required for transformations.
import {fill} from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  img: CloudinaryImage;
  title = 'cld-angular-docs';

  ngOnInit() {


    // 2. Set your cloud name
    //========================

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'demo'
      }
    });


    // 3. Get your image
    //===================

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = cld.image('docs/models');


    // 4. Transform your image
    //=========================

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));

  }
}
