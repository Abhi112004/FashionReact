import React from "react";
const Contactform = () => {
  return (
    <>
      <div className="cont-right-outer">
        <div className="cont-right-inner">
          <h2>Contact us</h2>
          <table border={0} cellSpacing={5}>
            <tr>
              <th className="text">Subject :</th>
              <th>
                <select>
                  <option>Customer Service</option>
                  <option>Webmaster</option>
                </select>
              </th>
            </tr>
            <tr>
              <th className="text">Email Address</th>
              <th>
                <input
                  type="email"
                  className="email"
                  placeholder="your@email.com"
                />
              </th>
            </tr>
            <tr>
              <th className="text">Attachment</th>
              <th>
                <input type="text" readOnly className="inputshow" />
                <label for="file-input" class="custom-file-upload">
                  Choose File
                </label>
                <input type="file" id="file-input" style={{display:'none'}} />
                <span className="
optional ">
                optional </span>
              </th>
            </tr>
            <tr>
              <th className="text">Message</th>
              <th>
                <input
                  type="text"
                  className="textinput"
                  placeholder="How can we help?"
                  required
                />
              </th>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="text-end">
                  <a href="/">send</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default Contactform;
