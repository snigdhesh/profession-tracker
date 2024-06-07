import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    imports:[
        MatToolbarModule,
        MatSlideToggleModule
    ],
    exports: [
        MatToolbarModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule{}