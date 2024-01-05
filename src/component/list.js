import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './loading';

export default function List() {
    const URL = 'http://localhost/TestCurd/test/index.php';
    const [test, setUser] = useState([]);
    const [loading, setLoading] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        axios.get(URL).then(res => {
            let response = res.data;
            setUser(response.data);
            setLoading(false);
        });
    }

    const deleteUser = (e, id) => {
        e.preventDefault();

        const button = e.currentTarget;
        button.innerText = "Suppression en Cours...";
        axios.delete(`http://localhost/TestCurd/test/index.php?id_test=${id}`).then(res => {
            alert(res.data.message);
            navigate('/list');
            setLoading(false);
        });
    }

    if(loading) {
        <Loading />
    }

    let userDetails = '';
    userDetails = test.map( (item, index) => {
        return(
            <tr key={index}>
                <td>{item.id_test}</td>
                <td>{item.name_test}</td>
                <td>{item.email_test}</td>
                <td>
                    <Link to={`/list/${item.id_test}/edit`} className='btn btn-success'>Edit</Link>
                    <button type='button' onClick={(e) => deleteUser(e, item.id_test)} className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    });
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Liste
                                <Link to="/list/create" className='btn btn-primary float-end'>
                                    Ajouter
                                </Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NOM</th>
                                        <th>EMAIL</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}