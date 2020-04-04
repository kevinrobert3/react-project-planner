import React from "react";
import moment from "moment";

const Notifications = props => {
  //console.log(props)
  const { notifications } = props;
  return (
    <div className="overflow-y-auto h-full" id="notifications-tab">
      {notifications &&
        notifications.map(item => {
          return (
            <div
              className="h-18 w-full rounded-lg shadow-sm bg-white  mb-5 px-5 py-5 border border-gray-200"
              key={item.id}
            >
              <span className="text-teal-600 ">{item.user} </span>
              <span className="lowercase">{item.content}</span>
              <p className="text-gray-600">
                {moment(item.time.toDate())
                  .startOf("minutes")
                  .fromNow()}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Notifications;
