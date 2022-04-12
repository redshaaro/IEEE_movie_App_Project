const Searcharea = (props) => {
    return ( 
        <div className="container">
            <div className="row">

                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handlesubmit}>
                        <div className="input-field">
                            <input placeholder="Search movie" type="text" onChange={props.handlechange} />





                        </div>




                    </form>


                </section>




            </div>

        </div>




     );
}
 
export default Searcharea;