import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import axios from 'axios';

const WithdrawalForms = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/get_withdrawal', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                console.log(response.data)
                setData(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    const handleApprove = async (withdrawalId, userId, courseId) => {
        const data = {
            withdrawal_id: withdrawalId,
            user_id: userId,
            course_id: courseId
        }
        try {
            const response = await axios.post(`http://localhost:4000/admin/approve_withdrawal`, data, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    }
    const handleReject = async (id, userId) => {
        console.log(id, userId)
    }

    return (
        <div>
            <DataTable value={data}>
                <Column field="course.name" header="Course Name" />
                <Column field="user.name" header="Student Name" />
                <Column header="" body={(rowData) => (
                    <Button icon="pi pi-check" rounded outlined aria-label="Filter" onClick={() => handleApprove(rowData._id, rowData.user._id, rowData.course._id)} ></Button>
                )} />
                <Column header="" body={(rowData) => (
                    <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" onClick={() => handleReject(rowData._id, rowData.user._id, rowData.course._id)} ></Button>
                )} />
            </DataTable>
        </div>
    );
}

export default WithdrawalForms;