import React, { useState, useEffect} from "react";
import axios from "axios";
import { BankComp } from "../../../component/BankComp/BankComp";

const Banks = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3010/banks');
                setData(response.data);
            }catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
            <div className="bank-balance">
                <h1>Cards</h1>
                <div className="banks">
                    {
                        data.map((data) => {
                            return <BankComp key={data.id} data={data}/>
                        })
                    }
                </div>
            </div>
    )
}

export default Banks;