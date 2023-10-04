import {
    Component
} from '@angular/core';

import {
    FormGroup
} from "@angular/forms";
import {
    MgFormControlsAccessor,
    MgControlName
} from "./Test.mg.controls.g";


import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";


@Component({
    selector: 'mga-Test',
    providers: [...magicProviders],
    templateUrl: './Test.component.html'
})
export class Test extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}