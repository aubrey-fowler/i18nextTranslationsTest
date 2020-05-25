import { Component, OnInit, Inject } from "@angular/core";
import { ITranslationService, I18NEXT_SERVICE } from "angular-i18next";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {

        this.i18NextService.events.languageChanged.subscribe(lang => {
            // do something
            console.log(' i18NextService ', lang); //this code is called
        });

    }

    ngOnInit(): void {
        //
    }

    changeLang(lang: string) {
        this.i18NextService.changeLanguage(lang);
        console.log(this.i18NextService.language);
    }

    addLang() {

        this.i18NextService.addResourceBundle('nl', 'translation', {
            "greeting": "Hej"
        }, true, true);

        console.log(this.i18NextService.languages);
    }

}
