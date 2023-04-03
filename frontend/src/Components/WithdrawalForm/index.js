import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import axios from 'axios';

const WithdrawalForm = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/get_enrolled_courses', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                console.log(response.data)
                setData(response.data);
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData();
    }, []);

    const handleButtonClick = async (id) => {
        try {
            const response = await axios.post(`http://localhost:4000/user/addWithdrawalForm/${id}`, null, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <DataTable value={data}>
                <Column field="name" header="Course Name" />
                <Column header="" body={(rowData) => (
                    <Button onClick={() => handleButtonClick(rowData._id)} >Withdraw</Button>
                )} />
            </DataTable>
        </div >
    );
}

export default WithdrawalForm;