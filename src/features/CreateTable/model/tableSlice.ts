import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TableData } from '../../../entities/Table/model/types';

const initialState: TableData = [];

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<string[]>) => {
      state.push({
        id: Date.now(),
        header: action.payload,
        rows: [
          ['', '', '', ''],
          ['', '', '', ''],
          ['', '', '', ''],
          ['', '', '', ''],
        ],
      });
    },
    copyTable: (state, action: PayloadAction<{ id: number; data: TableData }>) => {
      const { id, data } = action.payload;

      const copiedTableIndex = state.findIndex(table => table.id === id);
      state.splice(copiedTableIndex, 0, {
        ...data,
        id: Date.now(),
      });
    },
    updateCell: (
      state,
      action: PayloadAction<{ id: number; rowIndex: number; cellIndex: number; value: string }>
    ) => {
      const { id, rowIndex, cellIndex, value } = action.payload;
      const tableIndex = state.findIndex(table => table.id === id);
      if (tableIndex !== -1) {
        state[tableIndex].rows[rowIndex][cellIndex] = value;
      }
    },
  },
});

export const { addTable, copyTable, updateCell } = tableSlice.actions;

export default tableSlice.reducer;
