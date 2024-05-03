import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
// import PasswordList from './PasswordList';


const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/");
        let passwords = await req.json();
        setPasswordArray(passwords);
    }

    useEffect(() => {
        getPasswords();
    }, []);

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }

    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png";
            passwordRef.current.type = "password";
        } else {
            passwordRef.current.type = "text";
            ref.current.src = "icons/eyecross.png";
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) });

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) });

            setForm({ site: "", username: "", password: "" });
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('Error: Password not saved!');
        }
    }

    const deletePassword = async (id) => {
        let c = window.confirm("Do you really want to delete this password?");
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));

            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });

            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id });
        setPasswordArray(passwordArray.filter(item => item.id !== id));
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    

    return (
        <>
            <ToastContainer />
            <div style={{ backgroundImage: `url(https://www.forbes.com/advisor/wp-content/uploads/2023/09/best_android_password_managers_-_article_image.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="mycontainer">
                    <h1 className='text-4xl font-bold text-center'>
                        <span className='text-green-500'> &lt;</span>
                        <span>Password </span><span className='text-green-500'>Manager/&gt;</span>
                    </h1>
                    <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                    <div className="flex flex-col p-4 text-black gap-8 items-center">
                        <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1 bg-transparent' type="text" name="site" id="site" />
                        <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1 bg-transparent' type="text" name="username" id="username" />
                            <div className="relative">
                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1 bg-transparent' type="password" name="password" id="password" />
                                <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                    <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                                </span>
                            </div>
                        </div>
                        <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Save
                        </button>
                    </div>

                    <div className="passwords">
                        <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                        {passwordArray.length === 0 && <div> No passwords to show</div>}
                        {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{item.username}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{"*".repeat(item.password.length)}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='justify-center py-2 border border-white text-center'>
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Manager;



 
