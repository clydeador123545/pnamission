import heartLogo from '../images/heart.png'
import '../styles/record.css'

function DonationRec(){
    return(
        <div className="donation-record-container">
            <p className="title">Donation's Record</p>
            <div className="donation-container">
                <div className="title-container"
                    
                    style={{
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <img src={heartLogo} className="heart-logo"></img>
                    <p>DONATION</p>
                </div>


                <div className="grid-container">
                    
                    <ul>
                        <li>Name</li>
                        <li>Date</li>
                        <li>Amount</li>
                        <li>Recipient</li>
                        <li>Username</li>
                    </ul>
        
                    <ul>
                        <li>Anothony Doyle</li>
                        <li className="date">09/27/2024</li>
                        <li className="amount"><span style={{color: 'black', fontSize: '15px'}}>&#8369;</span>2000</li>
                        <li>Clyde Timothy Ador</li>
                        <li>clydeador27</li>
                    </ul> 
                    <ul>
                        <li>Clyde</li>
                        <li className="date">09/27/2024</li>
                        <li className="amount"><span style={{color: 'black', fontSize: '15px'}}>&#8369;</span>50</li>
                        <li>Kia</li>
                        <li>example1234</li>
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default DonationRec;