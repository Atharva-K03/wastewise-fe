import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form";
import { Form, FormGroup, FormLabel, FormControl, FormText } from "react-bootstrap";

// Context to share field name
const FormFieldContext = React.createContext({});

// Wrapper for react-hook-form Controller
const FormField = (props) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// Hook to access field metadata and validation state
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// Context to share item ID
const FormItemContext = React.createContext({});

// Wrapper for form group
function FormItem({ className, ...props }) {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <FormGroup className={className} {...props} />
    </FormItemContext.Provider>
  );
}

// Label component
function FormLabelComponent({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return (
    <FormLabel className={className} htmlFor={formItemId} {...props} />
  );
}

// Input control component
function FormControlComponent({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return (
    <FormControl
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}

// Description text
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return (
    <FormText id={formDescriptionId} className={className} {...props} />
  );
}

// Error message text
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) return null;
  return (
    <FormText id={formMessageId} className={className} {...props}>
      {body}
    </FormText>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabelComponent as FormLabel,
  FormControlComponent as FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
