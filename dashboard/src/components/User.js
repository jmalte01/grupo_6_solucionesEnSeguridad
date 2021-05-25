
function User(props){

   const { firstName, lastName } = props;


    return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-info  shadow">
                    <div className="card-body">
                        {`${lastName}, ${firstName}`}
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;