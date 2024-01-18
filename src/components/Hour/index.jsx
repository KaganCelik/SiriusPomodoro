import './index.css';

function Hour() {
    return (
        <div>
            <div className='hour-container'>
                <p className='hour'>15.30</p>
                <div className='utc-container'>
                    <p className='utc'>UTC+3</p>
                </div>
            </div>
        </div>
    )
}

export default Hour;