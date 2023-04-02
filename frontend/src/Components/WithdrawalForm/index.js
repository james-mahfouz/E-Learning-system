import { useState, useEffect } from 'react';
import { DataTable, Button } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const WithdrawalForms = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/get_enrolled_courses', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setData(response.data);
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData();
    }, []);

    const handleButtonClick = (id) => {
        console.log("hello")
    }

    return (
        <div>
            <DataTable value={data}>
                <Column field="name" header="Course Name" />
                <Column header="Actions" body={(rowData) => (
                    <Button onClick={() => handleButtonClick(rowData)}>View Details</Button>
                )} />
            </DataTable>
        </div>
    );
}

export default WithdrawalForms;