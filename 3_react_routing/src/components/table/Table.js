import React, { Component } from 'react';
import "./Table.css"
import {Table as uiTable} from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Table extends Component {
    
    render() {

        const { columns , rows } = this.props;  

        return(
            
                <TableContainer component={Paper}>
                 <uiTable /* className={classes.table} */ aria-label="simple table">
                    <TableHead>
                        <TableRow>
                    
                            {
                                columns && columns.map((column, index) => (<TableCell key={"table-header"+index}>{column}</TableCell>))
                            }
    
                    
                        </TableRow>
                    </TableHead>
                    <TableBody>

            
                    
                            {
                                rows.map((row, index) => {
                                    return (
                                        <TableRow key={"table-row"+index}>
                                            {columns.map(column => (
                                                <TableCell key={column+index}>{row[column]}</TableCell>
                                            ))}
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </uiTable>
                </TableContainer>
            
        );
    }
}

export default Table;