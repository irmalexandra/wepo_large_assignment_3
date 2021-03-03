import React from 'react';

class ShippingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.userForm = {};
    }

    submitForm(e) {
        e.preventDefault();
        const {fullName, address, city, telephone, postalCode} = this.userForm;
    }

    render() {
        return (
            <div className="inputFormContainer">
                <form>
                    <div className="form-group">
                        <label htmlFor="inputName">Full Name</label>
                        <input type="text" ref={input => this.userForm.fullName = input} className="form-control" id="inputName"
                               aria-describedby="nameHelp" placeholder="Enter name" />
                            <small id="nameHelp" className="form-text text-muted mb-4">We hope you will share your name with us</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" ref={input => this.userForm.address = input} className="form-control" id="inputAddress"
                               aria-describedby="addressHelp" placeholder="Enter Address" />
                        <small id="addressHelp" className="form-text text-muted mb-4">Your address is very important so the bubbles find a new home</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" ref={input => this.userForm.city = input} className="form-control" id="inputCity"
                               aria-describedby="cityHelp" placeholder="Enter City name" />
                        <small id="cityHelp" className="form-text text-muted mb-4">What is a city without bubbles in it?</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTelephone">Telephone</label>
                        <input type="text" ref={input => this.userForm.telephone = input} className="form-control" id="inputTelephone"
                               aria-describedby="telephoneHelp" placeholder="Enter email" />
                        <small id="telephoneHelp" className="form-text text-muted mb-4">So we can call you for all your bubble needs</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPostalCode">Postal Code</label>
                        <input type="text" ref={input => this.userForm.postalCode = input} className="form-control" id="inputPostalCode"
                               aria-describedby="postalCodeHelp" placeholder="Enter postal code" />
                        <small id="postalCodeHelp" className="form-text text-muted mb-4">I couldn't come up with anything clever here...</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ShippingInfo