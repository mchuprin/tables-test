import { useDispatch } from 'react-redux';

import { copyTable, updateCell } from '../../../features/CreateTable/model/tableSlice.ts';
import { TableData } from '../model/types/index.ts';

import styles from './Table.module.scss';

function Table({ data }: { data: TableData }) {
  const dispatch = useDispatch();

  const headerList = data.header.map((title, index) => (
    <th key={`${title}-${index}`}>
      <span>{title}</span>
      {data.header.length - 1 == index && (
        <button onClick={() => dispatch(copyTable({ data, id: data.id }))}>Copy</button>
      )}
    </th>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>{headerList}</tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, cellIndex) => (
              <td key={cellIndex}>
                <input
                  type='text'
                  value={col}
                  onChange={event =>
                    dispatch(
                      updateCell({ id: data.id, rowIndex, cellIndex, value: event.target.value })
                    )
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
