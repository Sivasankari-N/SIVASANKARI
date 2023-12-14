import React from 'react';

function Registration() {
  return (
    <div className="body-content">
      <div className="module">
        <h1>Create an account</h1>
        <form className="form" action="form.php" method="post" enctype="multipart/form-data" autoComplete="off">
          <div className="alert alert-error"></div>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" autoComplete="new-password" required />
          <input type="password" placeholder="Confirm Password" name="confirmpassword" autoComplete="new-password" required />

          {/* Additional fields for CRM portal */}
          
          <input type="text" placeholder="Phone Number" name="phoneNumber" required />
          <input type="text" placeholder="Event Type" name="eventType" required />
          <textarea placeholder="Address" name="address" required></textarea>
          
          <input type="text" placeholder="Event Name" name="eventName" required />
          {/* Add more fields as needed */}

          <input type="submit" value="Register" name="register" className="btn btn-block btn-primary" />
        </form>
      </div>
    </div>
  );
}
export default Registration;