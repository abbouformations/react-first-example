import React, {useState, useEffect} from 'react'
import CustomerService from '../services/CustomerService';

function CustomerComponent() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers()
    }, [])

    const getCustomers = () => {

        CustomerService.getCustomers().then((response) => {
            setCustomers(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Customers List</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Customer Id</th>
                        <th> Customer Identity</th>
                        <th> Customer Firstname</th>
                        <th> Customer Lastname</th>
                        <th> Customer Username</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        customers.map(
                                customer =>
                                <tr key = {customer.id}>
                                    <td> {customer.id }</td>
                                    <td> {customer.identityRef }</td>
                                    <td> {customer.firstname }</td>    
                                    <td> {customer.lastname }</td>
                                    <td> {customer.username }</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}

export default CustomerComponent