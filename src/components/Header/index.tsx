import { FaSearch, FaUser, FaPlus } from 'react-icons/fa'

export function Header() {

    return (
        <header className="d-flex justify-content-between mb-3">
            <div className="form-group d-flex align-items-center flex-1 mr-5">
                <input type="text" placeholder="Search for note..." className="form-control mr-2" />
                <button className="btn btn-outline-secondary">
                    <FaSearch size={20} />
                </button>
            </div>
            <div className="form-group d-flex align-items-center">
                <button className="btn btn-primary mr-2 d-flex  align-items-center">
                    <FaPlus className="mr-1" />
                    New note
                </button>
                <button className="btn btn-outline-secondary">
                    <FaUser size={20} />
                </button>
            </div>
        </header>
    )
}