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
  previewText: props => {
    return {
      color: props.conversation.unSeenMessages !== 0 ? null : "#9CADC8",
      fontWeight: "bold",
      fontSize: 12,
      letterSpacing: -0.17
    }
  },
  notification: props => {
    const condition = props.conversation.unSeenMessages >= 1 && props.conversation.unSeenMessages <= 9;
    return {
      visibility: props.conversation.unSeenMessages !== 0 ? null : "hidden",
      borderRadius: condition ? "50%" : 18,
      height: condition ? 10 : "fit-content",
      width: condition ? 10 : "fit-content",
      padding: condition ? "8.5px" : "3px 8px 3px 8px",
      alignItems: "center",
      justifyContent: "center",
      margin: "15px 15px 0px 15px",
      backgroundColor: "#0086FE",
      color: "white",
      fontSize: 8,
      letterSpacing: -0.5,
      fontWeight: 900,
    };
  }
}));

const ChatContent = (props) => {
  const classes = useStyles(props);

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {conversation.messages.length > 0 &&
        <Badge className={classes.notification} >
          {conversation.unSeenMessages}
        </Badge>
      }
    </Box>
  );
};

export default ChatContent;
