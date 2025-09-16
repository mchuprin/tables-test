import { useDispatch } from 'react-redux';

import { TableData } from '../model/types/index';

import styles from './Table.module.scss';

import { copyTable, updateCell } from '@/features/CreateTable/silces/slice';

function Table({ data }: { data: TableData }) {
  const dispatch = useDispatch();

  const headerList = data.header.map((title, index) => (
    <th className={styles.table__header} key={`${title}-${index}`}>
      <span>{title}</span>
      {data.header.length - 1 == index && (
        <button
          className={styles.table__button}
          onClick={() => dispatch(copyTable({ data, id: data.id }))}
        >
          <img src='src/shared/ui/icons/copy.svg' alt='Copy' />
        </button>
      )}
    </th>
  ));

  return (
    <table>
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
