import { Toast } from 'primereact/toast';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

import "./index.css"

const AddClasses = () => {
    const [course, setCourse] = useState("")

    const handleSubmit = async () => {
        const data = {
            name: course
        }
        try {
            const response = await axios.post(`http://localhost:4000/admin/create_course`, data, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log(response)
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <div className='add_class'>
            <label>Enter a className</label>
            <InputText value={course} onChange={(e) => setCourse(e.target.value)} />

            <Button label="Submit" icon="pi pi-check" onClick={handleSubmit} />

        </div>
    );
};

export default AddClasses;
