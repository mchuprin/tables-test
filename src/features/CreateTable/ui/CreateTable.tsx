import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { FieldNames, IFormInputs } from '../model/types';
import { addTable } from '../silces/slice';

import styles from './CreateTable.module.scss';

function CreateTable() {
  const [isEnabledModal, setIsEnabledModal] = useState(false);

  const toggleModal = () => {
    if (isEnabledModal) {
      reset();
    }
    setIsEnabledModal(!isEnabledModal);
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      [FieldNames.FIRST]: '',
      [FieldNames.SECOND]: '',
      [FieldNames.THIRD]: '',
      [FieldNames.FOURTH]: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
    dispatch(addTable(Object.values(data)));
    setIsEnabledModal(false);
    reset();
  };

  return (
    <>
      <button className={styles.trigger} onClick={() => toggleModal()}>
        CREATE TABLE
      </button>

      {isEnabledModal && (
        <form name='create-table-form' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={FieldNames.FIRST}
            control={control}
            rules={{ required: 'Поле обязательно для заполнения' }}
            render={({ field, fieldState }) => (
              <div className={styles.form__fieldWrapper}>
                <input form='create-table-form' type='text' placeholder='First column' {...field} />
                {fieldState.error && (
                  <p className={styles.form__error}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          ></Controller>

          <Controller
            name={FieldNames.SECOND}
            control={control}
            rules={{ required: 'Поле обязательно для заполнения' }}
            render={({ field, fieldState }) => (
              <div className={styles.form__fieldWrapper}>
                <input
                  form='create-table-form'
                  type='text'
                  placeholder='Second column'
                  {...field}
                />
                {fieldState.error && (
                  <p className={styles.form__error}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          ></Controller>

          <Controller
            name={FieldNames.THIRD}
            control={control}
            rules={{ required: 'Поле обязательно для заполнения' }}
            render={({ field, fieldState }) => (
              <div className={styles.form__fieldWrapper}>
                <input form='create-table-form' type='text' placeholder='Third column' {...field} />
                {fieldState.error && (
                  <p className={styles.form__error}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          ></Controller>

          <Controller
            name={FieldNames.FOURTH}
            control={control}
            rules={{ required: 'Поле обязательно для заполнения' }}
            render={({ field, fieldState }) => (
              <div className={styles.form__fieldWrapper}>
                <select form='create-table-form' {...field}>
                  <option value=''>Select...</option>
                  <option value='Country'>Country</option>
                  <option value='City'>City</option>
                  <option value='Street'>Street</option>
                  <option value='Home'>Home</option>
                </select>
                {fieldState.error && (
                  <p className={styles.form__error}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          ></Controller>

          <button type='submit' className={styles.form__btnSubmit}>
            ADD
          </button>
        </form>
      )}
    </>
  );
}

export default CreateTable;
