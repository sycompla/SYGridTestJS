import { Grid, Page, Sort, Filter, Group, ContextMenu, Toolbar, VirtualScroll } from '@syncfusion/ej2-grids';
import { data } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Dialog } from '@syncfusion/ej2-popups';
Grid.Inject(Page, Sort, Filter, Group, ContextMenu, Toolbar, VirtualScroll);

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
    contextMenuItems: ['Copy'],
    toolbar: ['Search', { text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
    { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }],
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    toolbarClick: (args: ClickEventArgs) => {
        if ( grid.getSelectedRecords().length > 0) {
            let withHeader: boolean = false;
            if (args.item.id === 'copyHeader') {
                withHeader = true;
            }
            grid.copy(withHeader);
        } else {
            
        }
    },
    enableVirtualization: true,
    enableColumnVirtualization: true,
    height: 500,
    gridLines: "Both",
    //allowPaging: true,
    pageSettings: { pageSize: 7 }
});

grid.appendTo('#Grid');