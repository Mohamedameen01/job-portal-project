export const unReadNotificationFuncs = (notifications) => {
  return notifications.filter((n) => n.isRead === false);
};
