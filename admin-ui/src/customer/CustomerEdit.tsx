import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="UID" source="uid" />
      </SimpleForm>
    </Edit>
  );
};
