import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetInstanceComponent } from './assetInstance.component';
import { FullExampleComponent } from './fullexample.component';
import { QuickstartComponent } from './quickstart.component';
import { TransformationComponent } from './transformation.component';
import { PluginsComponent } from './plugins.component';
import { LazyloadComponent } from './lazyload.component';
import { ResponsiveComponent } from './responsive.component';
import { AccessibilityComponent } from './accessibility.component';
import { PlaceholderComponent } from './placeholder.component';
import { LazyloadPlaceholderComponent } from './lazyloadPlaceholder.component';
import { SyntaxOverviewComponent } from './syntaxOverview.component';
import { DeliveryTypeComponent } from './deliveryType.component';
import { TransformingYourImageComponent } from './transformingYourImage.component';
import { ChainingTransformationsComponent } from './chainingTransformations.component';
import { ResizingCroppingComponent } from './resizingCropping.component';
import { ConvertingFormatExtensionComponent } from './convertingFormatExtension.component';
import { ConvertingFormatDeliveryComponent } from './convertingFormatDelivery.component';
import { AutoFormatComponent } from './autoFormat.component';
import { EffectsComponent } from './effects.component';
import { OverlaysComponent } from './overlays.component';
import { ImageOptimizationsComponent } from './imageOptimizations.components';


@NgModule({
  declarations: [
    AppComponent,
    QuickstartComponent,
    FullExampleComponent,
    TransformationComponent,
    AssetInstanceComponent,
    PluginsComponent,
    LazyloadComponent,
    ResponsiveComponent,
    AccessibilityComponent,
    PlaceholderComponent,
    LazyloadPlaceholderComponent,
    SyntaxOverviewComponent,
    DeliveryTypeComponent,
    TransformingYourImageComponent,
    ChainingTransformationsComponent,
    ResizingCroppingComponent,
    ConvertingFormatExtensionComponent,
    ConvertingFormatDeliveryComponent,
    AutoFormatComponent,
    EffectsComponent,
    OverlaysComponent,
    ImageOptimizationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
