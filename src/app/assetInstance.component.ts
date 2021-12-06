import {Component, OnInit} from '@angular/core';
import {CloudinaryImage} from '@cloudinary/url-gen/assets/CloudinaryImage';
import URLConfig from '@cloudinary/url-gen/config/URLConfig';
import CloudConfig from '@cloudinary/url-gen/config/CloudConfig';

@Component({
  selector: 'asset-instance-image',
  templateUrl: './example.component.html',
  styleUrls: ['./app.component.css']
})
export class AssetInstanceComponent implements OnInit{
  img: CloudinaryImage;

  title = 'Specify the Cloudinary configuration when instantiating an asset, as shown in '
  link = 'https://cloudinary.com/documentation/angular2_integration#asset_instance_configuration'
  heading = 'Asset instance configuration'

  ngOnInit() {

    // Set the Cloud configuration and URL configuration
    const cloudConfig = new CloudConfig({cloudName: 'demo'});
    const urlConfig = new URLConfig({secure: true});

    // Instantiate and configure a CloudinaryImage object.
    this.img = new CloudinaryImage('docs/shoes', cloudConfig, urlConfig);

  }
}