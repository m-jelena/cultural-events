import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();
  firstPageLabel = $localize`Prva strana`;
  itemsPerPageLabel = $localize`Broj redova po strani:`;
  lastPageLabel = $localize`Poslednja strana`;
  nextPageLabel = 'Sledeća strana';
  previousPageLabel = 'Prethodna strana';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Strana 1 od 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Strana ${page + 1} od ${amountPages}`;
  }
}