import { AbstractControl, ValidationErrors } from "@angular/forms";

export function restrictFuck(control: AbstractControl): ValidationErrors | null {
    return control.value.includes('fuck') ? { restrictFuck: true }: null;
}

export function restrictCustomList(words: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
        const invalidWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w !== null);
        return invalidWords.length > 0 ? { restrictCustomList: invalidWords.join(', ') }: null;
    }
}