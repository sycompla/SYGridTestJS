import { Grid, Page, Sort, Filter, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource';
Grid.Inject(Page, Sort, Filter, Group);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Center', width: 120, type: 'number', headerTextAlign: 'Center' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string', textAlign: 'Center', headerTextAlign: 'Center' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Center', width: 120, format: 'C', headerTextAlign: 'Center' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Center', headerTextAlign: 'Center' }
    ],
    allowGrouping: true,
    allowFiltering: true,
    filterSettings: {
        mode: 'Immediate'
    },
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 7 }
});

grid.appendTo('#Grid');