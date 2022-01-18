import React from 'react'
import { useNavigate } from 'react-router-dom'
///////////////////////////////////////////
import { TableRow, TableCell, IconButton, Collapse, Table, TableBody, TableHead, Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
///////////////////////////////////////////
import Label from '../../components/Label';
import { sentenceCase } from 'change-case';

const Category = ({ row }) => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    return (

        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Therapieliste
                            </Typography>
                            {/* <UserListToolbar
                                filterName={filterName}
                                onFilterName={handleFilterByName}
                                searchTerm="Therapie suchen..."
                            /> */}
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Physiotherapeut</TableCell>
                                        <TableCell align="right">Preis</TableCell>
                                        <TableCell align="right">Verfügbar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.name}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.name}
                                            </TableCell>
                                            <TableCell onClick={() => navigate('/settings')} sx={{ cursor: 'pointer', textDecoration: 'underline', color: '#00AB55' }}>
                                                {historyRow.therapeut}
                                            </TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                <Label
                                                    variant="ghost"
                                                    color={(historyRow.available === 'nein' && 'error') || 'success'}
                                                >
                                                    {sentenceCase(historyRow.available)}
                                                </Label>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Category
