import Cookies from 'js-cookie';

const Admin = () => {
    const handleLoginDemo = () => {
        // Set a demo token for the admin page
        Cookies.set('token', 'demoAdmin', { expires: 1 });

        // Log to console or display a message for demonstration
        console.log('Demo admin access granted');
    };

    return (
        <div className='dark:text-gray-100'>
            <h1 className='text-5xl mb-5'>Admin Demo Page</h1>
            <p>This is a demo page for administrative features.</p>
            <button onClick={handleLoginDemo} className='mt-2 py-2 px-4 bg-green-900 hover:bg-green-700 text-gray-100 rounded'>Enable Demo Admin</button>
        </div>
    );
};

export default Admin;