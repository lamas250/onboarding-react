import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export const TagTable = ({tags}) => {
    return (
        <>
            <Typography component="h1" variant="h5">
                Tags List
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>TAGs</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tags ? tags.map((row: any) => (
                        <TableRow
                        key={row.tag}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.tag}
                        </TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                        </TableRow>
                    )) : (
                        <Typography component="h1" variant="h5">
                            Empty
                        </Typography>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}