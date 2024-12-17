import ListItem from "../../components/list-item";
import { useStore } from "../../store/store";

const PersonPicker = () => {
  const [user, setUser] = useStore.user();
  const [phone, setPhone] = useStore.phone();

  const noUserPhone = () => {
    setUser("User Name");
    setPhone("0337076898")
  }

  if (user === "" && phone === "") {
    return (
      <ListItem
        onClick={() => noUserPhone()}
        title="Chọn người nhận"
        subtitle="Yêu cầu truy cập số điện thoại"
      />
    );
  }

  return (
    <ListItem
      title={`${user} - ${phone}`}
      subtitle="Người nhận"
    />
  );
};

export default PersonPicker;
