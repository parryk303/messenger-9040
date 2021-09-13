import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Search, Chat, CurrentUser } from "./index.js";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 21,
    paddingRight: 21,
    flexGrow: 1
  },
  title: {
    fontSize: 20,
    letterSpacing: -0.29,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 15
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const conversations = useSelector(state => state.conversations);
  const { handleChange, searchTerm } = props;

  return (
    <Box className={classes.root}>
      <CurrentUser />
      <Typography className={classes.title}>Chats</Typography>
      <Search handleChange={handleChange} />
      {conversations.length && conversations
        .filter((conversation) => conversation.otherUser.username.includes(searchTerm))
        .map((conversation) => {
          let otherResponse, userResponse, twoWayConvo = false;
          const length = conversation.messages.length - 1;
          let i = 0;
          while (i <= length) {
            conversation.messages[i].senderId === conversation.otherUser.id ? otherResponse = true
            : userResponse = true;
            if (otherResponse && userResponse) {
              twoWayConvo = true;
            }
            i++;
          }
          return <Chat conversation={conversation} key={conversation.otherUser.username} twoWayConvo={twoWayConvo}  />;
        })}
    </Box>
  );
};

export default (Sidebar);

// while (!twoWayConvo || i <= length) {
//   conversation.messages[i].senderId === conversation.otherUser.id ? otherResponse = true
//     : userResponse = true
//   if (otherResponse && userResponse) {
//     twoWayConvo = true;
//   }
//   i++;
// }
