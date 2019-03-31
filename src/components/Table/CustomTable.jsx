import React from 'react';
import Table from 'react-bootstrap/Table';

const CustomTable = props => {

return (
    <Table>
        <thead>
            <tr>
            {
                props.tableHead.map( todo => {
                    return (
                        <th key={todo.id}>{todo.title}</th>
                    )
                })
            }
            </tr>
        </thead>
        <tbody>
           
            {
                props.values.map( row => {
                    return (
                        <tr key={ Math.random() * new Date().getTime() }>
                            {
                                row.map( item => {
                                    return ( <td key={item.id} id={item.id} >{item.title}</td>   )
                                  })
                            }
                        </tr>
                    )
                } )
               
            } 
               
        </tbody>
    </Table>
    )
}

export default CustomTable;