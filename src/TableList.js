import React from 'react'

import { Table } from 'antd';
import 'antd/dist/antd.css'; 
function TableList({ countries }) {
    const columns = [
        {title: 'Country',
        dataIndex: 'country',
        },
        {
            title: 'Cases',
            dataIndex: 'cases',defaultSortOrder: 'descend',
            sorter: (a, b) => a.cases - b.cases,
            align:'center'
        },

    ]
    return (
        <div className="table">
            <Table 
                columns={columns}
                dataSource={countries}
                size='small'
            />
        </div>
    )
}

export default TableList
