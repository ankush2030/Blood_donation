import React from 'react';

export default function Header() {
  return <div>

    <nav className="navbar navbar-expand-lg bg-#FFE4E4">
      <div class="container-fluid" align="left">
        <a class="navbar-brand" href="#"><img src='./logo.png' className='logo-img' /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse right-part" id="navbarText">

          <span class="navbar-text">
            <a class="link text-black navibtn " href="#" >Home</a>
          </span>
          <span class="navbar-text">
            <a class="link text-black navibtn " href="#" >Donate</a>
          </span>
          <span class="navbar-text">
            <a class="link text-black navibtn " href="#" >About Us</a>
          </span>
          <span class="navbar-text">
            <a class="link text-black navibtn " href="#" >Sign Up</a>
          </span>
          <span class="navbar-text">
            <a class="link text-black navibtn " href="#" >Hospital Login</a>
          </span>
          <span class="navbar-text" >
            <div class="p-3 mb-2 bg-#FFE4E4 text-white">
              <span className="btn btn-danger"  >Looking For Blood</span>
            </div>

          </span>

        </div>
      </div>
    </nav>
    <hr class='l-break' />



    <img src='./doctor.png' className='home-img' />
    <p className='home-txt'>
      "You Can't Buy A Life For <br /> Someone with Money, But<br /> You Can Save A Life Of<br /> Someone By Donating Blood To Him"

      <span class="navbar-text" >
        <div class="p-3 mb-2 bg-#FFE4E4 text-white">
          <span className="btn btn-danger">Donate Now</span>
        </div>

      </span>
      <span class="navbar-text">
        <a class="link text-danger lr-more" href="#" >Learn More</a>
      </span>
    </p>
    <h3 className='h3-head'>Learn About Donation</h3>

    <br /><br />

    <h3 className='h3-head'>TYPES OF DONATION</h3> <br />
    <div className='donation-text'>
      The human body contains five liters of blood, which is made of several useful <br />
      components i.e. <b>Whole blood, Platelet,</b> ans <b>Plasma</b>
      <br /><br />
      Each type of component has several medical uses and can be used for different <br />
      medical treatments. Your blood donation determines the best donation for you to make.
      <br /><br />
      for <b>Plasma</b> and <b>Platelet</b> donaion you must have donated whole blood in past two years.
    </div>
    <br />

    <div className='info-cards'>

    </div>


    <br /><br /><br /><br />

    <div className='bottom'>
      <table class="table" className='bottom-table'>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>



  </div>;
}
