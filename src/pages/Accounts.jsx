import React from 'react';

const Accounts = (children) => {
    return (
        <div className="container">
            <div className='text-center'>
            <form>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email"></label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password"/>
                </div>
                <button className='glow-on-hover'>Login</button>
            </form>
        </div>
        </div>
    );
};

export default Accounts;