import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Test = "Test",
        Label3 = "Label3",
        A = "A",
        Label4 = "Label4",
        B = "B",
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get A(): FormControl {
        return this.fg.controls[MgControlName.A] as FormControl;
    }

    get B(): FormControl {
        return this.fg.controls[MgControlName.B] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}