import React from 'react'
import getCartItems from '../../services/productService'

class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.userForm = {};
    }

    submitForm(e) {
        e.preventDefault();
        const {fullName, address, city, telephone, postalCode} = this.userForm;
        console.log(fullName.value, address.value)
    }

    render() {
        return (
            <div>
                <form action="" method="get" onSubmit={(e) => this.submitForm(e)}>
                    <input type="text" ref={input => this.userForm.fullName = input}/>
                    <input type="text" ref={input => this.userForm.address = input}/>
                    <input type="text" ref={input => this.userForm.city = input}/>
                    <input type="text" ref={input => this.userForm.telephone = input}/>
                    <input type="text" ref={input => this.userForm.postalCode = input}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CustomerInfo