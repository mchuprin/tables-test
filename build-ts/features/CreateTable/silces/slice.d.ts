import { TableData } from '@entities/Table/model/types';
import { PayloadAction } from '@reduxjs/toolkit';
export declare const tableSlice: import("@reduxjs/toolkit").Slice<TableData[], {
    addTable: (state: import("immer").WritableDraft<TableData>[], action: PayloadAction<string[]>) => void;
    copyTable: (state: import("immer").WritableDraft<TableData>[], action: PayloadAction<{
        id: number;
        data: TableData;
    }>) => void;
    updateCell: (state: import("immer").WritableDraft<TableData>[], action: PayloadAction<{
        id: number;
        rowIndex: number;
        cellIndex: number;
        value: string;
    }>) => void;
}, "table", "table", import("@reduxjs/toolkit").SliceSelectors<TableData[]>>;
export declare const addTable: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], "table/addTable">, copyTable: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: number;
    data: TableData;
}, "table/copyTable">, updateCell: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: number;
    rowIndex: number;
    cellIndex: number;
    value: string;
}, "table/updateCell">;
declare const _default: import("redux").Reducer<TableData[]>;
export default _default;
//# sourceMappingURL=slice.d.ts.map