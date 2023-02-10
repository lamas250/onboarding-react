/* eslint-disable react/prop-types */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

export const TagTable = ({ tags }: any) => {
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
          {tags ? (
            tags.map((row: any) => (
              <TableBody key={row.id}>
                <TableRow key={row.tag} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.tag}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                </TableRow>
              </TableBody>
            ))
          ) : (
            <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
              <Typography component="h3" variant="h6">
                No tags to show
              </Typography>
            </Box>
          )}
        </Table>
      </TableContainer>
    </>
  );
};
