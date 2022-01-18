import React, { useState } from 'react';
import { filter } from 'lodash';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
///////////////////////////////////
import Page from '../components/Page';
import Category from '../components/_categories/Category'
import { UserListToolbar } from '../components/_dashboard/user';
import SearchNotFound from '../components/SearchNotFound';

function createData(name, history) {
    return {
        name,
        history
    };
}

const historyRowOne = [
    {
        name: 'Therapy 1',
        therapeut: 'Hans Miller',
        amount: '44$',
        available: 'ja'
    },
    {
        name: 'Therapy 2',
        therapeut: 'Jonas Schmith',
        amount: '32$',
        available: 'nein'
    },
]

const historyRowTwo = [
    {
        name: 'Therapy 3',
        therapeut: 'Josua Rohmer',
        amount: '20$',
        available: 'ja'
    },
    {
        name: 'Therapy 4',
        therapeut: 'Sam Rosenblum',
        amount: '50$',
        available: 'ja'
    },
]

const historyRowThree = [
    {
        name: 'Therapy 5',
        therapeut: 'Hauke Hackl',
        amount: '29$',
        available: 'nein'
    },
    {
        name: 'Therapy 6',
        therapeut: 'Eric Helwig',
        amount: '43$',
        available: 'ja'
    },
]

const rows = [
    createData('Client-Centered Therapy', historyRowOne),
    createData('Cognitive Behavioral Therapy', historyRowTwo),
    createData('Existential Therapy ', historyRowThree)
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function CollapsibleTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filterName, setFilterName] = useState('');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const filteredRows = applySortFilter(rows, getComparator(order, orderBy), filterName);
    const isUserNotFound = filteredRows.length === 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    return (
        <Page title="Kategorien">
            <Container>
                <Box mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Kategorien
                    </Typography>
                </Box>
                <Card>
                    <UserListToolbar
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        searchTerm="Kategorie suchen..."
                    />
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableBody>
                                {filteredRows.map((row) => (
                                    <Category key={row.name} row={row} />
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            {isUserNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                            <SearchNotFound searchQuery={filterName} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filteredRows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </Page>
    );
}
