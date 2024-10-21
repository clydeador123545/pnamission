import heartLogo from '../images/heart.png'
import '../styles/record.css'

function DonationRec(){
    return(
        <div class="donation-record-container">
            <p class="title">Donation's Record</p>
            <div class="donation-container">
                <div class="title-container"
                    
                    style={{
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <img src={heartLogo} class="heart-logo"></img>
                    <p>DONATION</p>
                </div>


                <div class="grid-container">
                    
                    <ul>
                        <li>Name</li>
                        <li>Date</li>
                        <li>Amount</li>
                        <li>Recipient</li>
                        <li>Username</li>
                    </ul>
        
                    <ul>
                        <li>Anothony Doyle</li>
                        <li class="date">09/27/2024</li>
                        <li class="amount"><span style={{color: 'black', fontSize: '15px'}}>&#8369;</span>2000</li>
                        <li>Clyde Timothy Ador</li>
                        <li>clydeador27</li>
                    </ul> 
                    <ul>
                        <li>Clyde</li>
                        <li class="date">09/27/2024</li>
                        <li class="amount"><span style={{color: 'black', fontSize: '15px'}}>&#8369;</span>50</li>
                        <li>Kia</li>
                        <li>example1234</li>
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default DonationRec;