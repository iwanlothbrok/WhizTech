import '../../styles/blog.css'

export default function Pages() {
    return (
        <div className="row mt-6 wow fadeInUp" >
            <div className="col-12">
                <div className="pagination text-small text-uppercase text-extra-dark-gray">
                    <ul>
                        <li>
                            <a href="#!">
                                <i className="fas fa-long-arrow-alt-left me-1 d-none d-sm-inline-block"></i>{" "}
                                Prev
                            </a>
                        </li>
                        <li className="active">
                            <a href="#!">1</a>
                        </li>
                        <li>
                            <a href="#!">2</a>
                        </li>
                        <li>
                            <a href="#!">3</a>
                        </li>
                        <li>
                            <a href="#!">
                                Next{" "}
                                <i className="fas fa-long-arrow-alt-right ms-1 d-none d-sm-inline-block"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}