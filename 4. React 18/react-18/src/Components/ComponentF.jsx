import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User: {user} | Channel : {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
