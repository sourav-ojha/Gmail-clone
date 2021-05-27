import React from "react";
import { Checkbox } from "@material-ui/core";
function Mail({sender, subject, message}) {
  return (
    <>
      <div className="gbody_mail">
        <div className="mail_head">
          <Checkbox />
          <div className="h">{sender}</div>
        </div>
        <div className="mail_body">
          <div>{subject}</div>
          <div>{message}</div>
        </div>
      </div>
    </>
  );
}

export default Mail;
