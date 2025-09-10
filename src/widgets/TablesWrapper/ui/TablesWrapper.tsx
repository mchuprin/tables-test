import { useSelector } from 'react-redux';

import Table from '../../../entities/Table/ui/Table.js';

import styles from './TablesWrapper.module.scss';

import { TableData } from '@/entities/Table/model/types/index.js';

function TablesWrapper() {
  const tables = useSelector(state => state.tables);

  const getItemClassName = (index: number) => {
    if (tables.length === 1 || (tables.length % 3 === 1 && index === tables.length - 1)) {
      return styles.item_full;
    }

    if (
      (tables.length === 2 || tables.length % 3 === 2) &&
      (index === tables.length - 1 || index === tables.length - 2)
    ) {
      if (tables.length === 3) {
        console.log(index, tables.length);
        console.log(
          tables.length === 2,
          tables.length % 3 === 2,
          index === tables.length - 1,
          index === tables.length - 2
        );
      }
      return styles.item_half;
    }

    return styles.item_third;
  };

  return (
    <div className={styles.container}>
      {tables.map((table: TableData, index: number) => (
        <div className={getItemClassName(index)} key={table.id}>
          <Table data={table} />
        </div>
      ))}
    </div>
  );
}

export default TablesWrapper;
