import { RootState } from '@app/store/store';
import { TableData } from '@entities/Table/model/types/index';
import Table from '@entities/Table/ui/Table';
import { useSelector } from 'react-redux';

import styles from './TablesWrapper.module.scss';

function TablesWrapper() {
  const tables = useSelector((state: RootState) => state.tables);

  const getItemClassName = (index: number) => {
    if (tables.length === 1 || (tables.length % 3 === 1 && index === tables.length - 1)) {
      return styles.item_full;
    }

    if (
      (tables.length === 2 || tables.length % 3 === 2) &&
      (index === tables.length - 1 || index === tables.length - 2)
    ) {
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
