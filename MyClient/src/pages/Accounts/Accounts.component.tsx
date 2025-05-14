/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
// eslint-disable-next-line camelcase,no-use-before-define
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {MaterialReactTable, MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row,} from 'material-react-table';
import {
    Box,
    Button,
    IconButton,
    Tooltip,
} from '@mui/material';
import {Delete, Edit} from '@mui/icons-material';
import {GetAccounts, CreateAccount, UpdateAccount, DeleteAccount} from "../../services/AccountService";
import {validateAge, validateEmail, validateRequired} from './Validate';
import {UpdateAccountModal} from './DialogUpdate';
import {CreateNewAccountModal} from './DialogCreate';
import {Person} from './ModelPerson';
import {COLUMNS} from './ColumnDef';
import Typography from "@mui/material/Typography";
import {FxContainer, FxContent, FxTitlePage} from '../../styles/GlobalStyle'

// const Accounts = () => {
export function Accounts() {

    const data: Person[] = [];

    const [createModalOpen, setCreateModalOpen]
        = useState(false);

    const [updateModalOpen, setUpdateModalOpen]
        = useState({open: false, item: {}});

    const [tableData, setTableData]
        = useState<Person[]>(() => data);

    const [validationErrors, setValidationErrors]
        = useState<{ [cellId: string]: string;}>({});


    useEffect(() => {
        GetAccounts().then((res) => {
            setTableData(res.data);
            console.log(res.data);
        })
    }, [])


    const handleCreateNewRow = (values: Person) => {
        CreateAccount(values).then(() => {
            console.log(values);
            tableData.push(values);
            setTableData([...tableData]);
        })
    };

    const handleUpdateRow = (values: Person) => {
        UpdateAccount(values).then(() => {
            console.log(values);
            const objIndex = tableData.findIndex((obj) => {return (obj._id === values._id)});
            tableData[objIndex] = values;
            setTableData([...tableData]);
        })
    };

    const handleSaveRowEdits: MaterialReactTableProps<Person>['onEditingRowSave'] =
        async ({exitEditingMode, row, values}) => {
            if (!Object.keys(validationErrors).length) {
                tableData[row.index] = values;
                // send/receive api updates here, then refetch or update local table data for re-render
                setTableData([...tableData]);
                exitEditingMode(); // required to exit editing mode and close modal
            }
        };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row: MRT_Row<Person>) => {
            if (
                !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)
            ) {
                return;
            }
            // send api delete request here, then refetch or update local table data for re-render
            DeleteAccount(row.original).then(() => {
                console.log(row.original);
                tableData.splice(row.index, 1);
                setTableData([...tableData]);
            })
        },
        [tableData],
    );

    const getCommonEditTextFieldProps
        = useCallback((cell: MRT_Cell<Person>,): MRT_ColumnDef<Person>['muiTableBodyCellEditTextFieldProps'] => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                                ? validateAge(+event.target.value)
                                : validateRequired(event.target.value);
                    if (!isValid) {
                        // set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        // remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },
        [validationErrors],
    );

    // @ts-ignore
    const columnsDef= useMemo<MRT_ColumnDef<Person>[]>(() => COLUMNS, [getCommonEditTextFieldProps],);

    return (
        <FxContainer>

            {/* Page Title */}
            <FxTitlePage>
                <Typography variant={'h6'} component="div" sx={{flexGrow: 1}} style={{height: '100%'}}>
                    {'Accounts List'}
                </Typography>
            </FxTitlePage>

            <FxContent>
                <MaterialReactTable
                    displayColumnDefOptions={{
                        'mrt-row-actions': {
                            muiTableHeadCellProps: {
                                align: 'center',
                            },
                            size: 120,
                        },
                    }}
                    columns={columnsDef}
                    data={tableData}
                    editingMode="modal"
                    enableColumnOrdering
                    positionActionsColumn="last"
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingRowCancel={handleCancelRowEdits}
                    renderRowActions={({row, table}) => (
                        <Box sx={{display: 'flex', gap: '1rem'}}>
                            <Tooltip arrow placement="left" title="Edit">
                                <IconButton onClick={() => setUpdateModalOpen({open: true, item: row})}>
                                    <Edit/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip arrow placement="right" title="Delete">
                                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                    <Delete/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                    renderTopToolbarCustomActions={() => (
                        <Button
                            color="secondary"
                            onClick={() => setCreateModalOpen(true)}
                            variant="contained">
                            Create New Account
                        </Button>
                    )}
                />
                <CreateNewAccountModal
                    columnsProp={columnsDef}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
                <UpdateAccountModal
                    columnsProp={columnsDef}
                    data={updateModalOpen}
                    onClose={() => setUpdateModalOpen({open: false, item: {}})}
                    onSubmit={handleUpdateRow}
                />
            </FxContent>

        </FxContainer>
    );
}
