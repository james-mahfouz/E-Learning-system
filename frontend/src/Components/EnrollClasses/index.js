import axios from 'axios';
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';

const EnrollClasses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/get_courses', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setCourses(response.data.data);
            } catch (e) {
                console.log(e.message);
            }
        };
        getCourses();
    }, []);

    const handleEnroll = async (id) => {
        console.log(`Enrolling in course ${id}`);

        try {
            const response = await axios.post(`http://localhost:4000/user/enroll/${id}`, null, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log(response)
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div>
            <DataTable value={courses} className="p-datatable-striped">
                <Column field="_id" header="Course ID" />
                <Column field="name" header="Course Name" />
                <Column header="Enroll" body={(rowData) => (
                    <Button label="Enroll" icon="pi pi-check" onClick={() => handleEnroll(rowData._id)} />
                )} />
            </DataTable>
        </div>
    );
};

export default EnrollClasses;