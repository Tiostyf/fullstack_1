import { useParams } from "react-router-dom";
import { useStoreItemStore } from "../store/storeItemStore";
import StoreItemForm from "../components/StoreItemForm";

export default function UpdatePage() {
  const { id } = useParams();
  const item = useStoreItemStore((state) =>
    state.items.find((i) => i._id === id)
  );

  if (!item) return <div>Loading...</div>;

  return <StoreItemForm initialData={item} isUpdate={true} itemId={id} />;
}
