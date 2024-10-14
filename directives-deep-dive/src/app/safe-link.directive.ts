import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective {
    queryParam = input("myapp", {alias: "appSafeLink"});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log("safeLinkDirective is active!");
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm("Do you want to leave the app?");
        
        if (wantsToLeave) {
            //Agrega un query para asi cuando el usuario sea redirigido, pueda ver en el hvinculo que fue desde mi app
            const address= this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address+'?from='+this.queryParam();
            return;
        }
        event.preventDefault();
    }
}