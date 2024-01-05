import {Routes, Route} from 'react-router-dom';
import Home from '../component/home';
import List from '../component/list';
import ListCreate from '../component/listCreate';
import ListUpdate from '../component/listUpdate';

export default function MyRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/list/create" element={<ListCreate />}></Route>
            <Route path="/list/:id/edit" element={<ListUpdate />}></Route>
        </Routes>
    );
}