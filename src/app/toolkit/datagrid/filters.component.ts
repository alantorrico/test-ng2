import { Component, Inject, forwardRef, Input } from '@angular/core';
import { DataGridComponent } from './data-grid.component';
import { ColumnComponent } from './column.component';

@Component({
    selector: '[filters]',
    templateUrl: './filters.component.html'
})
export class FiltersComponent {

    @Input('filters') public columns: ColumnComponent[];
   
    constructor(@Inject(forwardRef(() => DataGridComponent)) public datagrid:DataGridComponent) {}
    
}
