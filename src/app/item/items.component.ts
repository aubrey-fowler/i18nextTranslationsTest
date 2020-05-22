import { Component, OnInit, Inject } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ITranslationService, I18NEXT_SERVICE } from "angular-i18next";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    items: Array<Item>;

    constructor(private itemService: ItemService, @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {

        this.i18NextService.events.languageChanged.subscribe(lang => {
            // do something
            console.log(' i18NextService ', lang);
        });

    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    changeLang(lang: string) {
        this.i18NextService.changeLanguage(lang);
    }

    addLang(lang: string) {
        this.i18NextService.addResourceBundle(lang, 'translation', {
            "greeting": "Hej"
        }, true, false);
    }

}
