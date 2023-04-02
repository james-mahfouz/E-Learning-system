import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ListStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getFiles = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/get_users_courses', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setStudents(response.data.data.courses);
                console.log(response.data.data.courses);
            } catch (e) {
                console.log(e.message);
            }
        };
        getFiles();
    }, []);


    return (
        <div className="">
            {students.map((course) => (
                <div key={course.name}>
                    <h3>{course.name}</h3>
                    <DataTable tableStyle={{ minWidth: '50%' }} value={course.students}>
                        <Column field="_id" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="email" header="Email"></Column>
                    </DataTable>
                </div>
            ))}
        </div>
    );
};

export default ListStudents;