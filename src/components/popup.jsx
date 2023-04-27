import React from 'react'

function Popup(props) {
    console.log(props.dataModal);
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <img className="h-auto w-full sm:w-1/3 sm:h-auto mx-auto" src={props.dataModal.urlToImage} alt="" />
                            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-2xl leading-6 font-medium text-gray-900">
                                    {props.dataModal.title}
                                </h3>
                                <p className="text-base text-gray-500">
                                    {props.dataModal.publishedAt}
                                </p>
                                <p className="mt-4 text-lg text-gray-500">
                                    {props.dataModal.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={props.handleClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Popup
