import './index.css';

function Hour() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();

    let month = months[date.getMonth()];
    let day = days[date.getDay()];

    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();

    return (
        <div>
            <div className='hour-container'>
                <div className='year-container'>
                    <p>{day},</p>
                    <p>{month}</p>
                    <p>{year}</p>

                </div>
                <p className='hour'>{hour}:{minute}</p>
            </div>
        </div>
    )
}

export default Hour;