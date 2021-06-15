import { Grid, Page, Sort, Filter, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource';
Grid.Inject(Page, Sort, Filter, Group);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowGrouping: true,
    allowFiltering: true,
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 7 }
});

grid.appendTo('#Grid');