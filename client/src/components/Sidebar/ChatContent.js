import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unseenPreviewText: {
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: -0.17,
  },
  severalNotifications: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: "fit-content",
    width: "fit-content",
    margin: "15px 15px 0px 15px",
    backgroundColor: "#0086FE",
    color: "white",
    fontSize: 8,
    letterSpacing: -0.5,
    fontWeight: 900,
    padding: "3px 8px 3px 8px",
  },
  notification: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    height: 10,
    width: 10,
    margin: "15px 15px 0px 15px",
    backgroundColor: "#0086FE",
    color: "white",
    fontSize: 8,
    letterSpacing: -0.5,
    fontWeight: 900,
    padding: "8.5px",
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        {conversation.unSeenMessages !== 0 ?
          <Typography className={classes.unseenPreviewText}>
            {latestMessageText}
          </Typography>
          :
          <Typography className={classes.previewText}>
            {latestMessageText}
          </Typography>
        }
      </Box>
      {conversation.unSeenMessages >= 1 && conversation.unSeenMessages <= 9 &&
        <Badge className={classes.notification} >
          {conversation.unSeenMessages}
        </Badge>}
      {conversation.unSeenMessages >= 9 &&
        <Badge className={classes.severalNotifications} >
          {conversation.unSeenMessages}
        </Badge>}
    </Box>
  );
};

export default ChatContent;
