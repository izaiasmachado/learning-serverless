import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card'


function App() {
    const [items, setItems] = useState([]);
    
    
    useEffect(() => {
        async function getItems() {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/links`)
            const data = response.data
            console.log(data)
            setItems(data)
        }
        getItems()
    }, []);

    return ( 
        <div className = "App" >
            <div className = "container row"> {
                    items.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                link={item.link}>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;