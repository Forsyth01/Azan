import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Login = () => {
    return (
        <div>
            <div className="m-auto w-[80%] my-10">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-xl my-10">Login with Shop Azany</h1>
                    <form action="" className="flex flex-col">
                        
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="password" variant="outlined" />
                            
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;