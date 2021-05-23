import React from 'react'


const CreateUser = ({onChangeForm, createUser, getAllUsers }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Search Bank</h2>
                <form>
                    {/* <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Search By IFSC Or Bank Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="searchKey" id="ifsc" aria-describedby="emailHelp" placeholder="IFSC Or Bank Name" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => getAllUsers()} className="btn btn-danger">Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser