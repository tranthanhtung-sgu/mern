import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import { getProducts } from '../api/product'

const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 250,
        editable: false,
    },

    {
        field: 'name',
        headerName: 'Name',
        width: 300,
        editable: false,
    },

   
    {
        field: 'screen',
        headerName: 'Screen',
        width: 150,
        editable: false,
    },
    {
        field: 'ram',
        headerName: 'RAM',
        width: 110,
        editable: false,
    },
    {
        field: 'rom',
        headerName: 'rom',
        width: 110,
        editable: false,
    },

];

export default function DataGridDemo() {
   
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data.products.map(item => {
                const { _id, ...rest } = item;
                return { id: _id, ...rest };
            }))
           
        }

        ).catch(err => console.log(err))


        return () => {

        }
    },[products])
    //Delete Product
  

    return (
        <div style={{ height: 1000, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
            />
        </div>
    );
}
