/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
// eslint-disable-next-line camelcase

import {MRT_ColumnDef} from "material-react-table";
import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {Person} from './ModelPerson';

export interface UpdateModalProps {
    columnsProp: MRT_ColumnDef<Person>[];
    onClose: () => void;
    onSubmit: (values: Person) => void;
    data: any;
}

export const UpdateAccountModal = ({data, columnsProp, onClose, onSubmit,}: UpdateModalProps) => {

    const [values, setValues] = useState<any>(() =>
        columnsProp.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {} as any),
    );

    const handleSubmit = () => {
        // put your validation logic here
        const newValues = Object.assign(data.item.original);
        for (const [key, value] of Object.entries(values)) {
            if (values[key] !== '') {
                newValues[key] = value;
            }
        }
        onSubmit(newValues);
        onClose();
    };

    if (!data.open) {
        return null;
    }
    else
    {

        const uiFieldsData = columnsProp.map((column) => {
            // @ts-ignore
            const value = data.item.original[column.accessorKey];
            return Object.assign({}, column, {value: value});
        });

        const uiFields = uiFieldsData.map((column) => (
            <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                defaultValue={column.value}
                onChange={(e) =>
                    setValues({...values, [e.target.name]: e.target.value})
                }
            />
        ));

        return (
            <Dialog open={data.open}>
                <DialogTitle textAlign="center">Update Account</DialogTitle>
                <DialogContent style={{paddingTop: '20px'}}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Stack
                            sx={{
                                width: '100%',
                                minWidth: {xs: '300px', sm: '360px', md: '400px'},
                                gap: '1.5rem',
                            }}>
                            {uiFields}
                        </Stack>
                    </form>
                </DialogContent>
                <DialogActions sx={{p: '1.25rem'}}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button color="secondary" onClick={handleSubmit} variant="contained">
                        Update Account
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
};
