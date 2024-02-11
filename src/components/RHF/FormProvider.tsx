import { ReactNode } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';
import { Rest } from '../../configs/types';

type Props<T> = {
  id?: string;
  methods: UseFormReturn<any>;
  schema?: T;
  children: ReactNode;
  onSubmit?: () => void;
} & Rest

const FormProvider = <T,>({ children, id, methods, schema, onSubmit, ...props }: Props<T>) => {
  const handleCheckRequired = (name: string): boolean => {
    // @ts-expect-error add check required method
    return schema?.fields?.[name]?.exclusiveTests['required'] !== undefined;
  }

  return (
    // @ts-expect-error add check required method
    <Form {...methods} onCheckRequired={handleCheckRequired}>
      <form
        id={id}
        noValidate
        onSubmit={onSubmit}
        style={{ width: '100%' }}
        {...props}
      >
        {children}
      </form>
    </Form>
  )
}

export default FormProvider;
