import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../../services/getFirestore';
import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../../Loading/Loading';
import { Row,Col } from 'react-bootstrap';

const ItemDetailContainer = ({greeting}) => {

const [item, setItem] = useState([])
const [loading, setLoading] = useState(true)

const { id } = useParams ();

const db = getFirestore()

useEffect(() => {

if (id) {
    const dbQueryItem = db.collection('items').doc(id).get()
    dbQueryItem
    .then(resp => setItem({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(setTimeout(()=>setLoading(false),500))    
}

//eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-2 text-center"> 
                {greeting}
                <h2>Detalle del producto</h2>
                <h3>Id {item.id}</h3>
                {loading ? <Loading h="20vh" w="0" size="lg"/> : <ItemDetail item={item}/>}
            </Col>
        </Row>
    )
}

export default ItemDetailContainer