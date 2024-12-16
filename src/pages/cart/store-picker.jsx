import { useState } from "react";
import { createPortal } from "react-dom";
import { ActionSheet } from "../../components/fullscreen-sheet";
import ListItem from "../../components/list-item";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import {
  nearbyStoresState,
  requestLocationTriesState,
  selectedStoreIndexState,
  selectedStoreState,
} from "../../state";
import { displayDistance } from "../../utils/location";

const StorePicker = () => {
  const [visible, setVisible] = useState(false);
  const nearbyStores = useRecoilValueLoadable(nearbyStoresState);
  const setSelectedStoreIndex = useSetRecoilState(selectedStoreIndexState);
  const selectedStore = useRecoilValue(selectedStoreState);

  console.log("nearby",nearbyStoresState,);
  console.log("select", selectedStore)
  if (!selectedStore) {
    return <RequestStorePickerLocation />;
  }

  return (
    <>
      <ListItem
        onClick={() => setVisible(true)}
        title={selectedStore.name}
        subtitle={selectedStore.address}
      />
      {nearbyStores.state === "hasValue" &&
        createPortal(
          <ActionSheet
            title="Các cửa hàng ở gần bạn"
            visible={visible}
            onClose={() => setVisible(false)}
            actions={[
              nearbyStores.contents.map(
                (store, i) => ({
                  text: store.distance
                    ? `${store.name} - ${displayDistance(store.distance)}`
                    : store.name,
                  highLight: store.id === selectedStore?.id,
                  onClick: () => {
                    setSelectedStoreIndex(i);
                  },
                })
              ),
              [{ text: "Đóng", close: true, danger: true }],
            ]}
          ></ActionSheet>,
          document.body
        )}
    </>
  );
};

const RequestStorePickerLocation = () => {
  const retry = useSetRecoilState(requestLocationTriesState);
  return (
    <ListItem
      onClick={() => retry((r) => r + 1)}
      title="Chọn cửa hàng"
      subtitle="Yêu cầu truy cập vị trí"
    />
  );
};

export { StorePicker, RequestStorePickerLocation };
