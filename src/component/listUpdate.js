import { Link, useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function ListUpdate() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [email_test, setEmail] = React.useState('');
    const [user_test, setUserTest] = React.useState('');
    const [name_test, setName] = React.useState('');
    const [password_test, setPass] = React.useState('');
        

    React.useEffect (() => {
        axios.get(`http://localhost/TestCurd/test/index.php?id_test=${id}`).then(res => {
            let response = res.data
            setEmail(response.data[0].email_test);
            setUserTest(response.data[0].user_test);
            setName(response.data[0].name_test);
            setPass(response.data[0].password_test);
        });
    }, [id]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
       
    }
    const handleUser = (e) => {
        setUserTest(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const updateData = (e) => {
        e.preventDefault();

        const data = {
            'email_test': email_test,
            'user_test': user_test,
            'name_test': name_test,
            'password_test': password_test,
        }

        axios.put(`http://localhost/TestCurd/test/index.php?id_test=${id}`, data).then(res => {
            alert(res.data.message);
            navigate('/list');
            clearAllText();
        });
    }

    const clearAllText = () => {
        setEmail("");
        setUserTest("");
        setName("");
        setPass("");
    }

    return(
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Modifier utilisateur
                                    <Link to="/list" className='btn btn-primary float-end'>
                                        retour
                                    </Link>
                                </h4>
                            </div>

                            <div className='card-body'>
                                <form onSubmit={updateData}>
                                    <div className='mb-3'>
                                        <label>Email</label>
                                        <input type='text' name='email_test' value={email_test} onChange={handleEmail} className='form-control' placeholder='anona@gmail.com' />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Nom d'utilisateur</label>
                                        <input type='text' name='user_test' value={user_test} onChange={handleUser} className='form-control' placeholder="Votre nom d'utilisateur" />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Nom</label>
                                        <input type='text' name='name_test' value={name_test} onChange={handleName} className='form-control' placeholder='Votre nom' />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Mot de passe</label>
                                        <input type='text' name='password_test' value={password_test} onChange={handlePass} className='form-control' placeholder='******' />
                                    </div>
                                    <div className='mb-3'>
                                        <button type='submit' className='btn btn-primary'>Enregistrer</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}