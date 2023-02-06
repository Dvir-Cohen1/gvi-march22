import React from "react";
import { Typography } from "@mui/material";
import { LocationOn, Phone, Person, Email } from "@mui/icons-material";

const UserCardDetails = ({ user }) => {
  const details = [
    { Icon: Phone, value: user.phoneNumber ? user.phoneNumber : "-" },
    { Icon: Email, value: user.email },
    { Icon: Person, value: "we will think" },
  ];

  const typographyStyle = {
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    mt: 7,
  };

  return (
    <div className="user_card_details_container">
      {details.map(({ Icon, value }, index) => (
        <Typography key={index} sx={typographyStyle}>
          <Icon sx={{ fontSize: "large" }} />
          {value}
        </Typography>
      ))}
    </div>
  );
};

export default UserCardDetails;
