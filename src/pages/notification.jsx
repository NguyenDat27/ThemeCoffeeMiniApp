import PropTypes from "prop-types";
import ListRenderer from "../components/list-renderer";
import { Box, Header, Page, Text } from "zmp-ui";
import Divider from "../components/divider";
import { useStore } from "../store/store";

const NotificationList = () => {
  
  const [notifications] = useStore.notifications();

  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={notifications}
        renderLeft={(item) => (
          <img className="w-10 h-10 rounded-full" src={item.image} alt={item.title} />
        )}
        renderRight={(item) => (
          <Box key={item.id}>
            <Text.Header>{item.title}</Text.Header>
            <Text
              size="small"
              className="text-gray overflow-hidden whitespace-nowrap text-ellipsis"
            >
              {item.content}
            </Text>
          </Box>
        )}
      />
    </Box>
  );
};

const NotificationPage = () => {
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Divider />
      <NotificationList />
    </Page>
  );
};

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

NotificationList.defaultProps = {
  notifications: [],
};

export default NotificationPage;
