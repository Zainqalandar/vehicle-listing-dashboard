const FormPage = () => {
    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">User Form</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name:</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email:</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormPage;